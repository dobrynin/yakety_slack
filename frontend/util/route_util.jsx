import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

const Auth = ({component: Component, path, loggedIn, defaultChannelId}) => (
  <Route path={path} render={props => {
        return (
    !loggedIn ? (
      <Component {...props} />
      ) : (
      defaultChannelId ? <Redirect to={`/channels/${defaultChannelId}`} /> : <Redirect to={`/channels/`} />
    )
  );}}/>
);

const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to='/' />
      )
    )}/>
);

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  defaultChannelId: session.currentUser ? session.currentUser.channels[0] : null
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
