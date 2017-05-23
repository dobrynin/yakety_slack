import {
  RECEIVE_ALL_USERS
} from '../actions/user_actions';

const AllUsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;    default:
      return state;
  }
};

export default AllUsersReducer;
