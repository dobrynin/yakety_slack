import { connect } from 'react-redux';
import NavBar from './nav_bar';

const mapStateToProps = ({ session, channels }) => ({
  currentUser: session.currentUser
});


export default connect(mapStateToProps)(NavBar);
