import React from 'react';

class NavBarHeader extends React.Component{

  render() {
    const { username } = this.props;
    return(
      <div className='nav-bar-header'>
        <h1 className='team-name'>Yak Academy</h1>
        <h2 className='username'>{ username }</h2>
      </div>
    );
  }
}

export default NavBarHeader;
