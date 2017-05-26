import { connect } from 'react-redux';
import ChannelList from './channel_list';
import { fetchChannels } from '../../actions/channel_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = ({ channels }) => ({
  channels: asArray(channels).filter(channel => !channel.DM)
});

export default connect(mapStateToProps)(ChannelList);
