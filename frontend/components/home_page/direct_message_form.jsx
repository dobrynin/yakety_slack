import Modal from 'react-modal';
import React from 'react';
import { withRouter } from 'react-router-dom';
import UserListItemContainer from './user_list_item_container';
const customStyles = {
  overlay : {
    backgroundColor       : 'rgba(255, 255, 255, 1)'
  },

  content : {
    top                   : '0',
    left                  : '0',
    right                 : 'auto',
    bottom                : 'auto',
    border                : '0',
    width                 : '100%',
    height                : '100%',
    padding               : '0'
  }
};

class DirectMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
    <div className='channel-form-wrapper'>
      {this.renderErrors()}
      <div className='escape-button-wrapper'>
        <button onClick={this.props.closeModal}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <div>esc</div>
      </div>

      <h2 className='create-channel'>Direct Messages</h2>
      <form className='direct-message-form' onSubmit={this.handleSubmit}>
        <div className="direct-message-form-input">
            <input className='direct-message-input'
              type="text"
              value={this.state.name}
              onChange={this.update}
              placeholder='Find or start a conversation'
            />
        </div>
        <button className='direct-message-button'>Go</button>
      </form>
      <ul className='user-list'>
        {this.props.allUsers.map( (user, idx) => <UserListItemContainer key={idx} user={user} />)}
      </ul>
    </div>
  );
}
}

export default DirectMessageForm;
