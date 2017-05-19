export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

import * as APIUtil from '../util/message_api_util';

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const createMessage = message => dispatch => (
  APIUtil.createMessage(message)
  .then(newMessage => dispatch(receiveMessage(newMessage)))
);
