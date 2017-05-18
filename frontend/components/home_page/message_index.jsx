import React from 'react';
import { withRouter } from 'react-router-dom';
import MessageIndexHeader from './message_index_header';

class MessageIndex extends React.Component {

  componentDidMount() {
    if (this.props.channelId) {
      this.props.fetchChannelData(this.props.channelId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.channelId !== this.props.channelId) {
      this.props.fetchChannelData(nextProps.channelId);
    }
  }

  render() {
    const {channelName, channelDescription, messages, users} = this.props;
    return (
      <div>
        <MessageIndexHeader
          channelName={ channelName }
          userCount={ users.length }
          channelDescription={ channelDescription }
          />
        <div className='MessageIndexItems'>
          {messages.map(message => <div className='message-body' key={message.id}>{message.body}</div>)}
        </div>
      </div>
    );
  }
}


export default withRouter(MessageIndex);
