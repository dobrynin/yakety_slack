import { connect } from 'react-redux';
import NavBar from './nav_bar';

const mapStateToProps = ({session, channels }) => ({
  currentUser: session.currentUser,
  channels
});

const mapDispatchToProps = () => ({
  hello: 'helo'
});


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
