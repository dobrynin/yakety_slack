import { connect } from 'react-redux';
import DirectMessageForm from './direct_message_form';
import { createChannel } from '../../actions/channel_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = ({ session, channels, allUsers }) => ({
  userId: session.currentUser.id,
  errors: channels.errors,
  allUsers: asArray(allUsers)
});

const mapDispatchToProps = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(DirectMessageForm);
