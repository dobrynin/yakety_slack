import React from 'react';
import { withRouter } from 'react-router-dom';


class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const channelId = this.props.channel.id;
    this.props.history.push(`/messages/${channelId}`);
  }

  render() {
    const { name, DM, moderator_id } = this.props.channel;
    return (
      <a className='channel-index-item' onClick={this.handleClick}>
        <div className='channel-index-text'>
          <p>{ name }</p>
        </div>
      </a>
    );
  }
}



export default withRouter(ChannelIndexItem);
