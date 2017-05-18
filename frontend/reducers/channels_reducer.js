import merge from 'lodash/merge';

import {
  RECEIVE_CHANNEL,
  RECEIVE_CHANNELS,
  RECEIVE_ERRORS
} from '../actions/channel_actions';

const ChannelsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CHANNEL:
      const newChannel = {[action.channel.id]: action.channel}
      return merge({}, state, newChannel);
    case RECEIVE_CHANNELS:
      return channels;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
};


export default ChannelsReducer;
