import React from 'react';

const SelectedUserItem = ({ user, handleClick }) => (
  <li className='selected-user-item' onClick={handleClick}>
    <img src={user.avatar_url} />
    <div>{user.username}</div>
    <i className="fa fa-times" aria-hidden="true"></i>
  </li>
);

export default SelectedUserItem;
