import merge from 'lodash/merge';

import {
  RECEIVE_CHANNEL_DATA
} from '../actions/channel_actions';

import {
  RECEIVE_MESSAGE
} from '../actions/message_actions';

const MessagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CHANNEL_DATA:
      return action.messages || {};
    case RECEIVE_MESSAGE:
      const newMessage = {[action.message.id]: action.message};
      return merge({}, state, newMessage);
    default:
      return state;
  }
};

export default MessagesReducer;
