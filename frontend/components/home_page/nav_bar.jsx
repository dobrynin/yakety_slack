import React from 'react';
import ChannelIndex from './channel_index';
import NavBarHeader from './nav_bar_header';

class NavBar extends React.Component {

  render() {

    const {channels, fetchChannels, currentUser} = this.props;
    const subscriptions = channels.filter(channel => {
      return currentUser.channels.includes(channel.id);
    });

    return (
        <div className='home-page-nav-bar'>
          <NavBarHeader username={currentUser.username}/>
          <ChannelIndex channels={subscriptions} fetchChannels={fetchChannels}/>
        </div>
    );
  }

}

export default NavBar;
