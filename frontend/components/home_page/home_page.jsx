import React from 'react';
import NavBarContainer from './nav_bar_container';
import MessageIndexContainer from './message_index_container';
import { fetchChannels } from '../../actions/channel_actions';
import { ProtectedRoute } from '../../util/route_util';
import { Route, Redirect } from 'react-router-dom';

const HomePage = ({ defaultChannelId }) => (
  <div className='home-page'>
    <NavBarContainer />
    <Route exact path='/channels/' render={() => {
        if (defaultChannelId) {
          return <Redirect to={`/channels/${defaultChannelId}`}/>;
        } else {
          return <div></div>;
        }
      }
    }/>
    <ProtectedRoute path='/channels/:channelId' component={MessageIndexContainer}/>
  </div>
);

export default HomePage;
