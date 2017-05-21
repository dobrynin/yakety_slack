import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS } from '../actions/session_actions';

import {
  RECEIVE_CHANNEL
} from '../actions/channel_actions';

const nullUser = {
  currentUser: null,
  errors: [],
  avatar_url: "",
  channels: [],
};

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, { currentUser });
    case RECEIVE_CHANNEL:
      const newSubscriptions = state.currentUser.channels.concat(action.channel.id);
      const updatedUser = merge(state.currentUser, { channels: newSubscriptions });
      return merge({}, nullUser, { currentUser: updatedUser });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, { errors });
    default:
      return state;
  }
};

export default SessionReducer;
