import { connect } from 'react-redux';
import MessageIndex from './message_index';
import { withRouter } from 'react-router-dom';
import asArray from '../../reducers/selectors';

const mapStateToProps = ({ messages, channels, users }) => {
  const channel = channels[location.pathname.slice(1)];
  debugger;
  return ({
    channelName: channel.name,
    channelDescription: channel.description,
    messages: asArray(messages),
    users: asArray(users)
  });
};

export default withRouter(connect(mapStateToProps)(MessageIndex));
