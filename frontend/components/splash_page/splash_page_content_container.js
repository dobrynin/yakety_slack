import SplashPageContent from './splash_page_content';
import { connect } from 'react-redux';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser)
});


export default connect(mapStateToProps)(SplashPageContent);
