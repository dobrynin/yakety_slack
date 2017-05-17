import React from 'react';
import { Link } from 'react-router-dom';


class SplashPageContent extends React.Component {
  getStartedButton() {
    if (this.props.loggedIn) {
      return (<Link to='/messages'>
        <button className='get-started-button'>Get Started</button>
      </Link>)
    } else {
      return (<Link to='/signup'>
        <button className='get-started-button'>Get Started</button>
      </Link>)
    }
  }

  render() {
    return (
      <div className="splash-page-content">
        <h1>
          Where work happens.
        </h1>
        <p>
          Whatever work means for you, Yak brings all the pieces and people
          you need together so you can actually get things done.
        </p>
        { this.getStartedButton() }
        <p className="splash-page-content-footer">
          Already joined a Yak team? <Link to='/login' className='link-to-sign-in'>Sign in</Link>
        </p>
      </div>
    )
  }
}

export default SplashPageContent;
