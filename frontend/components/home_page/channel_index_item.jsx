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

  handleName(channel) {
    if (channel.DM) {
      const splitNames = channel.name.split(", ");
      const idx = splitNames.indexOf(this.props.currentUser.username);
      splitNames.splice(idx, 1);
      return splitNames.join(', ');
    } else {
      return channel.name;
    }
  }

  render() {
    return (
      <NavLink to={`/channels/${this.props.channel.id}`}>
        <div className='channel-index-item'>
        <div className='channel-index-text'>
          <p>{ this.handleName(this.props.channel) }</p>
        </div>
        </div>
      </NavLink>
    );
  }
}



export default withRouter(ChannelIndexItem);
