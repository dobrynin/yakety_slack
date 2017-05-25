import { connect } from 'react-redux';
import { fetchChannels, receiveChannel } from '../../actions/channel_actions';
import ChannelIndex from './channel_index';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = ({ session, channels }) => {
  const subscriptions = asArray(channels).filter(channel => {
    return session.currentUser.channels.includes(channel.id);
  });
  return ({
    channels: subscriptions,
    allChannels: asArray(channels),
    currentUser: session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels()),
  receiveChannel: channel => dispatch(receiveChannel(channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);
