import merge from 'lodash/merge';

import {
  RECEIVE_CHANNEL,
  RECEIVE_CHANNELS,
  RECEIVE_CHANNEL_ERRORS,
} from '../actions/channel_actions';

import { RECEIVE_NOTIFICATION } from '../actions/notification_actions';

const defaultState = {
  errors: []
};

const ChannelsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CHANNEL:
      let newChannel = {[action.channel.id]: action.channel};
      return merge({}, state, newChannel);
    case RECEIVE_CHANNELS:
      return merge({}, defaultState, action.channels);
    case RECEIVE_CHANNEL_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    case RECEIVE_NOTIFICATION:
      newChannel = {[action.channel.id]: action.channel};
      return merge({}, state, newChannel);
    default:
      return state;
  }
};

export default ChannelsReducer;
