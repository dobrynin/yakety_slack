import React from 'react';
import { withRouter } from 'react-router-dom';


class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const channelId = this.props.channel.id
    this.props.history.push(`/channels/${channelId}`);
  }

  render() {
    const { name, DM, moderator_id } = this.props.channel;
    return (
      <div className='channel-index-item' onClick={this.handleClick}>
        <div className='channel-index-text'>
          <span>{ name }</span>
        </div>
      </div>
    );
  }
}



export default ChannelIndexItem;
