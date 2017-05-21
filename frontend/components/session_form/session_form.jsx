import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update (field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="signup">Sign up instead</Link>;
    } else {
      return <Link to="/login">Log in instead</Link>;
    }
  }

  heading() {
    if (this.props.formType === 'login') {
      return "Sign in to your team";
    } else {
      return "Create a new Yak account";
    }
  }

  renderErrors() {
    return(
      <ul className='session-errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  submitButton() {
    if (this.props.formType === 'login') {
      return <input type="submit" value="Sign in" className={"green-button" + " big"} />;
    } else {
      return <input type="submit" value="Create account" className={"green-button" + " big"} />;
    }
  }

  render() {
    return (
      <div className='session-form-container'>
        <form onSubmit={this.handleSubmit} className='session-form-box'>
          <div className="session-heading">
            { this.heading() }
          </div>
          <div className="session-form-body">
            <div className="session-sub-heading">
              Enter your Yak <span>username</span> and <span>password</span>.
            </div>
            {this.renderErrors()}
            <div className="session-inputs-wrapper">
              <div className="session-form-input">
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className='session-input'
                    placeholder='username'
                  />
              </div>
              <div className="session-form-input">
                  <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className='session-input'
                  placeholder='password'
                  />
              </div>
              { this.submitButton() }
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
