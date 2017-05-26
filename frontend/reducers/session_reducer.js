import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

import {
  RECEIVE_CHANNEL
} from '../actions/channel_actions';

import { RECEIVE_NOTIFICATION } from '../actions/notification_actions';

const nullUser = {
  currentUser: null,
  errors: [],
};

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, { currentUser });
    case RECEIVE_CHANNEL:
      let newSubscriptions = state.currentUser.channels.concat(action.channel.id);
      let updatedUser = merge(state.currentUser, { channels: newSubscriptions });
      return merge({}, nullUser, { currentUser: updatedUser });
    case RECEIVE_SESSION_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, { errors });
    case RECEIVE_NOTIFICATION:
      newSubscriptions = state.currentUser.channels.concat(action.channel.id);
      updatedUser = merge(state.currentUser, { channels: newSubscriptions });
      return merge({}, nullUser, { currentUser: updatedUser });
    default:
      return state;
  }
};

export default SessionReducer;
