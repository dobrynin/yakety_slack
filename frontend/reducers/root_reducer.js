import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ChannelsReducer from './channels_reducer';
import UsersReducer from './users_reducer';
import MessagesReducer from './messages_reducer';
import AllUsersReducer from './all_users_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  channels: ChannelsReducer,
  users: UsersReducer,
  messages: MessagesReducer,
  allUsers: AllUsersReducer
});

export default RootReducer;
