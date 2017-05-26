export const RECEIVE_NOTIFICATION = 'RECEIVE_NOTIFICATION';
export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION';

import * as APIUtil from '../util/notification_api_util';

export const deleteNotifications = (userId, channelId) => dispatch => {
  console.log(userId, channelId);
  return (
  APIUtil.deleteNotifications(userId, channelId)
  .then(() => dispatch(removeNotifications(userId, channelId)))
)}

export const receiveNotification = ({ channel, count }) => ({
  type: RECEIVE_NOTIFICATION,
  channel,
  count
});

const removeNotifications = (userId, channelId) => ({
  type: DELETE_NOTIFICATION,
  channelId
});
