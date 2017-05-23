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

      </div>
    );
  }
}

export default UserListItem;
