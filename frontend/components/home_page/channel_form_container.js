import { connect } from 'react-redux';
import ChannelForm from './channel_form';
import { createChannel } from '../../actions/channel_actions';

const mapStateToProps = ({ session }) => ({
  userId: session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(ChannelForm);
