import React from 'react';

const ChannelListItem = ({ channel }) => (
  <div className='channel-list-item'>
    <div className='channel-list-item-top-row'>
      <div>{`# ${channel.name}`}</div>
    </div>
    <div className='channel-list-item-bottom-row'>
      <div>{`Created on ${(new Date(channel.created_at)).toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: '2-digit'})}`}</div>
    </div>
  </div>
);

export default ChannelListItem;
