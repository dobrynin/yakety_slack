import React from 'react';
import ChannelIndexContainer from './channel_index_container';
import NavBarHeader from './nav_bar_header';

class NavBar extends React.Component {

  render() {

    const {currentUser} = this.props;

    return (
        <div className='home-page-nav-bar'>
          <NavBarHeader username={currentUser.username}/>
          <ChannelIndexContainer />
        </div>
    );
  }

}

export default NavBar;
