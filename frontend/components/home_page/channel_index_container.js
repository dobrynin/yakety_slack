import { connect } from 'react-redux';
import { fetchChannels } from '../../actions/channel_actions';
import ChannelIndex from './channel_index';
import { asArray } from '../../reducers/selectors';
import { receiveMessage } from '../../actions/message_actions';

const mapStateToProps = ({ session, channels }) => {
  const subscriptions = asArray(channels).filter(channel => {
    return session.currentUser.channels.includes(channel.id);
  });
  return ({
    channels: subscriptions,
    allChannels: asArray(channels)
  });
};

const mapDispatchToProps = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels()),
  receiveMessage: message => {
    debugger;
    return dispatch(receiveMessage(message));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);
