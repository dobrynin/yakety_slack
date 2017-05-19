import { connect } from 'react-redux';
import MessageForm from './message_form.jsx';
import { createMessage } from '../../actions/message_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session, channels }, { match }) => {
  if (!channels[match.params.channelId]) {
    return ({
      userId: null,
      channelId: null,
      channelName: null
    });
  } else {
    return ({
      userId: session.currentUser.id,
      channelId: match.params.channelId,
      channelName: channels[match.params.channelId].name
    });
  }
};

const mapDispatchToProps = dispatch => ({
  createMessage: message => dispatch(createMessage(message))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(MessageForm));
