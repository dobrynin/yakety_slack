import { connect } from 'react-redux';
import ChannelListItem from './channel_list_item';
import { createSubscription } from '../../actions/subscription_actions';
const mapStateToProps = ({ session }) => ({
  userId: session.currentUser.id,
});

const mapDispatchToProps = dispatch => ({
  createSubscription: subscription => dispatch(createSubscription(subscription))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(ChannelListItem);
