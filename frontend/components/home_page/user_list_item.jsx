import React from 'react';

class UserListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('hello');
  }

  render() {
    const { user } = this.props;
    return(
      <div className='user-list-item' onClick={this.handleClick}>
        <div className='user-list-avatar-area'>
          <img className='avatar' src={user.avatar_url} />
        </div>
        <div className='user-list-username-area'>
          {user.username}
        </div>
      </div>
    );
  }
}

export default UserListItem;
