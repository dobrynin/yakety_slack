import merge from 'lodash/merge';

import {
  RECEIVE_NOTIFICATION,
  DELETE_NOTIFICATION
} from '../actions/notification_actions';

const NotificationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NOTIFICATION:
      const newNotification = {[action.channel.id]: action.count};
      return merge({}, state, newNotification);
    case DELETE_NOTIFICATION:
      const newState = merge({}, state);
      delete newState[action.channelId];
      return newState;
    default:
      return state;
  }
};

export default NotificationsReducer;
