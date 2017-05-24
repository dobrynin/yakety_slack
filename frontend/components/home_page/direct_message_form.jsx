import Modal from 'react-modal';
import React from 'react';
import { withRouter } from 'react-router-dom';
import UserListItemContainer from './user_list_item_container';
import SelectedUserItem from './selected_user_item';

const customStyles = {
  overlay : {
    backgroundColor       : 'rgba(255, 255, 255, 1)'
  },

  content : {
    top                   : '0',
    left                  : '0',
    right                 : 'auto',
    bottom                : 'auto',
    border                : '0',
    width                 : '100%',
    height                : '100%',
    padding               : '0'
  }
};

class DirectMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      users: this.props.allUsers,
      selectedUsers: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.selectUser = this.selectUser.bind(this);
    this.deselectUser = this.deselectUser.bind(this);
  }

  update(e) {
    const newUsers = this.props.allUsers.filter(user => {
      return user.username.startsWith(e.target.value) && !this.state.selectedUsers.includes(user);
    });
    this.setState({ name: e.target.value, users: newUsers });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  selectUser(user, idx) {
    return () => {
      this.state.users.splice(idx, 1);
      this.setState({selectedUsers: this.state.selectedUsers.concat(user)});
    };
  }

  deselectUser(user) {
    return () => {
      const idx = this.state.selectedUsers.indexOf(user);
      this.state.selectedUsers.splice(idx, 1);
      this.setState({users: this.state.users.concat(user)});
    };
  }

  render() {
    return (
    <div className='channel-form-wrapper'>
      {this.renderErrors()}
      <div className='escape-button-wrapper'>
        <button onClick={this.props.closeModal}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <div>esc</div>
      </div>

      <h2 className='create-channel'>Direct Messages</h2>
      <form className='direct-message-form' onSubmit={this.handleSubmit}>
        <div className="direct-message-form-input">
          <div className='direct-message-search-box'>
            <ul className='selected-users-list'>
              {this.state.selectedUsers.map( (user, idx) => <SelectedUserItem key={idx} user={user} handleClick={this.deselectUser(user)}/>)}
              <input className='direct-message-input'
                type="text"
                value={this.state.name}
                onChange={this.update}
                placeholder={this.state.selectedUsers.length === 0 ? 'Find or start a conversation' : ''}
                />
            </ul>
          </div>
        </div>
        <button className='direct-message-button'>Go</button>
      </form>
      <ul className='user-list'>
        {this.state.users.map( (user, idx) => {
          if (user.id !== this.props.userId) {
            return <UserListItemContainer key={idx} user={user} handleClick={this.selectUser(user, idx)}/>;
          }
        })}
      </ul>
    </div>
  );
}
}

export default DirectMessageForm;
