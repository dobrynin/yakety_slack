import React from 'react';
const MessageIndexItem = ({ message, user }) => (
  <div className='message-index-item'>
    <div className='avatar-area'>
      <img className='avatar' src={user.avatar_url} />
    </div>
    <div className='message-index-item-body'>
      <h4 className='message-username'>{ user.username }</h4>
      <p className='message-body'>{ message.body }</p>
    </div>
  </div>
);

export default MessageIndexItem;
