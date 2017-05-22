import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import React from 'react';
import { withRouter } from 'react-router-dom';

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

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    };
    this.afterOpenModal = this.afterOpenModal.bind(this);
    const appElement = document.getElementById('root');
    Modal.setAppElement(appElement);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  afterOpenModal() {
    // this.subtitle.style.color = '#f00';
  }



  update (property) {
    return e => this.setState({[property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const moderator_id = this.props.userId;
    const channel = Object.assign({}, this.state, { moderator_id });
    this.props.createChannel(channel).then(({ channel }) => {
      this.props.closeModal();
      this.setState({ name: "", description: "" });
      this.props.history.push(`/channels/${channel.id}`);
    });
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

  renderChannelForm () {
    return (
      <Modal
      isOpen={this.props.modalIsOpen}
      onAfterOpen={this.afterOpenModal}
      onRequestClose={this.props.closeModal}
      style={customStyles}
      contentLabel="New Channel Modal"
      >
      <div className='channel-form-wrapper'>
        {this.renderErrors()}
        <div className='escape-button-wrapper' onClick={this.props.closeModal}>
          <button>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
          <div>esc</div>
        </div>

        <h2 className='create-channel'>Create Channel</h2>
        <form className='channel-form' onSubmit={this.handleSubmit}>
          <div className="channel-form-input">
              <input className='channel-input'
                type="text"
                value={this.state.name}
                onChange={this.update('name')}
                placeholder='Channel Name'
              />
            <input className='channel-input'
                type="text"
                value={this.state.description}
                onChange={this.update('description')}
                placeholder='Channel Description'
              />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </Modal>
  );
  }

  renderDirectMessageForm() {
    return (
      <Modal
      isOpen={this.props.modalIsOpen}
      onAfterOpen={this.afterOpenModal}
      onRequestClose={this.props.closeModal}
      style={customStyles}
      contentLabel="New Channel Modal"
      >
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
              <input className='direct-message-input'
                type="text"
                value={this.state.name}
                onChange={this.update('name')}
                placeholder='Find or start a conversation'
              />
          </div>
          <button className='direct-message-button'>Go</button>
        </form>
      </div>
    </Modal>
  );
}

  render() {
      if (this.props.formType === 'channel') {
        return this.renderChannelForm();
      } else {
        return this.renderDirectMessageForm();
      }
  }
}

export default withRouter(ChannelForm);
