import React from 'react';
import MessageIndexHeader from './message_index_header';

const MessageIndex = ({channelName, channelDescription, messages, users}) => (
  <div>
    <MessageIndexHeader
      channelName={ channelName }
      userCount={ users.length }
      channelDescription={ channelDescription }
      />
  </div>
);

export default MessageIndex;
