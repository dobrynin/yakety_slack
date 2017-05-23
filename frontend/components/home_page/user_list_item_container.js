import { connect } from 'react-redux';
import UserListItem from './user_list_item';
import { createChannel } from '../../actions/channel_actions';

const mapStateToProps = ({ session }) => ({
  userId: session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserListItem);
