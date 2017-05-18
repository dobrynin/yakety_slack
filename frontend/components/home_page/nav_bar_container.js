import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { asArray } from '../../reducers/selectors';
import { fetchChannels } from '../../actions/channel_actions';
const mapStateToProps = ({ session, channels }) => ({
  currentUser: session.currentUser,
  channels: asArray(channels)
});

const mapDispatchToProps = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels())
});


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
