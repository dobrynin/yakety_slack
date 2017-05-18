import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout, login } from '../../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session }, { location }) => ({
  currentUser: session.currentUser,
  formType: location.pathname.slice(1)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (username, password) => dispatch(login({user: {username, password}}))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(Greeting));
