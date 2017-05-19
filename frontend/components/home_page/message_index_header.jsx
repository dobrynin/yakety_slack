import React from 'react';

const MessageIndexHeader = ({ channelName, userCount, channelDescription }) => (
  <div className='message-index-header'>
    <h2 className='message-index-header-channel-name'>{ channelName }</h2>
    <div>
      <ul className='message-index-header-info'>
        <li className='member-count'>
          <i className="fa fa-user" aria-hidden="true"></i>
          { userCount }
        </li>
        <li className='channel-description'>
          { channelDescription }
        </li>
      </ul>
    </div>
  </div>
);

export default MessageIndexHeader;
