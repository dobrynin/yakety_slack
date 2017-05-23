export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

import * as APIUtil from '../util/users_api_util';

export const fetchAllUsers = () => dispatch => (
  APIUtil.fetchAllUsers()
  .then(users => dispatch(receiveAllUsers(users)))
);

const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});
