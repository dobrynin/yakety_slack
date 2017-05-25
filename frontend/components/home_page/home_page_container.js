import { connect } from 'react-redux';
import HomePage from './home_page';

const mapStateToProps = ({ session }) => ({
  defaultChannelId: session.currentUser.channels[0]
});

export default connect(mapStateToProps)(HomePage);
