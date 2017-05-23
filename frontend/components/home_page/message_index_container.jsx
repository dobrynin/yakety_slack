import { connect } from 'react-redux';
import MessageIndex from './message_index';
import { withRouter } from 'react-router-dom';
import { asArray } from '../../reducers/selectors';
import { fetchChannelData } from '../../actions/channel_actions';
import { receiveMessage } from '../../actions/message_actions';

const mapStateToProps = ({ messages, channels, users }, { match }) => {
  const channel = channels[match.params.channelId] || {};
  return ({
    channelId: channel.id,
    channelName: channel.name,
    channelDescription: channel.description,
    messages: asArray(messages),
    users
  });
};

const mapDispatchToProps = dispatch => ({
  fetchChannelData: (id) => dispatch(fetchChannelData(id)),
  receiveMessage: message => {
    return dispatch(receiveMessage(message));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);
