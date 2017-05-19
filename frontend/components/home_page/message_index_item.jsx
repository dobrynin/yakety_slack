import React from 'react';
const MessageIndexItem = ({message, user}) => (
  <div className='message-index-item'>
    <div className='avatar-area'>
    </div>
    <div className='message-index-item-body'>
      <h4>{ user.username }</h4>
      <p>{ message.body }</p>
    </div>
  </div>
);

export default MessageIndexItem;
