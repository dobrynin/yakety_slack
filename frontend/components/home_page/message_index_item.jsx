import React from 'react';
const MessageIndexItem = ({ message, user }) => (
  <div className='message-index-item'>
    <div className='avatar-area'>
      <img className='avatar' src={user.avatar_url} />
    </div>
    <div className='message-index-item-body'>
      <h4 className='message-header'>
        <div className='message-username'>{ user.username }</div>
        &nbsp;&nbsp;
        <div className='message-time'>{ (new Date(message.created_at)).toLocaleTimeString(undefined, {hour: 'numeric', minute: '2-digit'}) }</div>
      </h4>
      <p className='message-body'>{ message.body }</p>
    </div>
  </div>
);

export default MessageIndexItem;
