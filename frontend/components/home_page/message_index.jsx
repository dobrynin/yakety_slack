import React from 'react';
import { withRouter } from 'react-router-dom';
import MessageIndexHeader from './message_index_header';
import MessageFormContainer from './message_form_container.js';
import MessageIndexItem from './message_index_item';
import { asArray } from '../../reducers/selectors';

class MessageIndex extends React.Component {

  constructor(props) {
    super(props);
    this.setSocket = this.setSocket.bind(this);
    this.removeSocket = this.removeSocket.bind(this);
    this.addSocket = this.addSocket.bind(this);
  }

  setSocket(channelId) {
    if (window.App.channel) {
      this.removeSocket();
    }
    this.addSocket(channelId);
  }

  removeSocket() {
    window.App.cable.subscriptions.remove(window.App.channel);
  }

  addSocket(channelId) {
    window.App.channel = window.App.cable.subscriptions.create({
      channel: 'MessagesChannel',
      channel_id: channelId
    }, {
      connected: () => { },
      disconnected: () => {},
      received: data => this.props.receiveMessage(data)
    });
  }

  componentDidMount() {
    this.props.fetchChannelData(this.props.channelId);
    this.props.fetchAllUsers();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.channelId !== this.props.channelId) {
      this.props.fetchChannelData(nextProps.channelId);
      this.props.fetchAllUsers();
      this.setSocket(nextProps.channelId);
    }
  }

  render() {
    const {channelName, channelDescription, messages, users} = this.props;
    return (
      <div className='message-index' >
        <MessageIndexHeader
          channelName={ channelName }
          userCount={ asArray(users).length }
          channelDescription={ channelDescription }
          />
        <div className='message-index-items' id='message-index-items'>
          {messages.map(message => (
            <MessageIndexItem
              key={message.id}
              message={message}
              user={users[message.user_id]}
              />
          ))}
        </div>
        <MessageFormContainer />
      </div>
    );
  }
}


export default withRouter(MessageIndex);
