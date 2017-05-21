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
  constructor() {
    super();
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

  render() {
    return(
      <Modal
        isOpen={this.props.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
        <div className='channel-form-wrapper'>
          {this.renderErrors()}
          <div className='escape-button-wrapper'>
            <button onClick={this.props.closeModal}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <div>esc</div>
          </div>

          <h2 ref={this.subtitle}>Create Channel</h2>
          <form className='channel-form' onSubmit={this.handleSubmit}>
            <div className="channel-form-input">
                <input className='channel-name-input'
                  type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  placeholder='Channel Name'
                />
              <input className='channel-description-input'
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
}

export default withRouter(ChannelForm);
