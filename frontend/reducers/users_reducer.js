import merge from 'lodash/merge';

import {
  RECEIVE_CHANNEL_DATA
} from '../actions/channel_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CHANNEL_DATA:
      return action.users || {};
    default:
      return state;
  }
};

export default UsersReducer;
