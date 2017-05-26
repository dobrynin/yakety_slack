import { connect } from 'react-redux';
import { fetchChannels, receiveChannel } from '../../actions/channel_actions';
import ChannelIndex from './channel_index';
import { asArray } from '../../reducers/selectors';
import { receiveNotification, deleteNotifications } from '../../actions/notification_actions';

const mapStateToProps = ({ session, channels, notifications }) => {
  const subscriptions = asArray(channels).filter(channel => {
    return session.currentUser.channels.includes(channel.id);
  });
  return ({
    channels: subscriptions,
    allChannels: asArray(channels),
    currentUser: session.currentUser,
    notifications
  });
};

const mapDispatchToProps = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels()),
  receiveChannel: channel => dispatch(receiveChannel(channel)),
  receiveNotification: notification => dispatch(receiveNotification(notification)),
  deleteNotifications: (userId, channelId) => dispatch(deleteNotifications(userId, channelId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);
