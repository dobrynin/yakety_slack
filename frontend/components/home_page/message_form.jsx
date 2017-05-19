import { connect } from 'react-redux';
import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      userId: props.userId,
      channelId: props.channelId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update (e) {
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = Object.assign({}, this.state);
    this.props.createMessage(message);
  }

  render() {
    return (
      <div className='message-form-container'>
        <form className='message-form' onSubmit={this.handleSubmit}>
          <div className="message-form-input">
              <input type="text"
                value={this.state.body}
                onChange={this.update}
                placeholder={`Message #${this.props.channelName}`}
              />
          </div>
        </form>
      </div>
    );
  }
}

export default MessageForm;
