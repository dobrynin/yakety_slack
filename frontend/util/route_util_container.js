import { connect } from 'react-redux';
import React from 'react';

const mapStateToProps = ({ session }) => ({
  defaultChannelId: session.currentUser.channels[0]
});

export default RouteUtilContainer;
