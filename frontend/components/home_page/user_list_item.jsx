import React from 'react';

class UserListItem extends React.Component {

  render() {
    const { user } = this.props;
    return(
      <div className='user-list-item' onClick={this.props.handleClick}>
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
