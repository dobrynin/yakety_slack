import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';


class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const channelId = this.props.channel.id;
    this.props.history.push(`/channels/${channelId}`);
  }

  render() {
    const { name, DM, moderator_id } = this.props.channel;
    return (
      <NavLink to={`/channels/${this.props.channel.id}`}>
        <div className='channel-index-item'>
        <div className='channel-index-text'>
          <p>{ name }</p>
        </div>
        </div>
      </NavLink>
    );
  }
}



export default withRouter(ChannelIndexItem);
