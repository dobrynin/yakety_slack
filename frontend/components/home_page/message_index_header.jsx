import React from 'react';

const MessageIndexHeader = ({ channelName, userCount, channelDescription }) => (
  <div className='message-index-header'>
    <h2>{ channelName }</h2>
    <div>{ userCount }</div>
    <div>{ channelDescription }</div>
  </div>
);

export default MessageIndexHeader;
