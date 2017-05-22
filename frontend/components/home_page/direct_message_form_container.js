import { connect } from 'react-redux';
import DirectMessageForm from './direct_message_form';
import { createChannel } from '../../actions/channel_actions';

const mapStateToProps = ({ session, channels }) => ({
  userId: session.currentUser.id,
  errors: channels.errors
});

const mapDispatchToProps = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(DirectMessageForm);
