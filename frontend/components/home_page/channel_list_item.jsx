import React from 'react';
import { Link } from 'react-router-dom';

class ChannelListItem extends React.Component {
  handleClick() {
    
  }

  render() {
    const { channel } = this.props;
    return(
      <div className='channel-list-item' onClick={this.handleClick}>
        <div className='channel-list-item-top-row'>
          <div className='channel-list-item-name'>{`# ${channel.name}`}</div>
        </div>
        <div className='channel-list-item-bottom-row'>
          <div>{`Created on ${(new Date(channel.created_at)).toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: '2-digit'})}`}</div>
        </div>
      </div>
    );
  }
}

export default ChannelListItem;
