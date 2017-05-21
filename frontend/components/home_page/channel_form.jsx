import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import React from 'react';

const customStyles = {
  overlay : {
    backgroundColor       : 'rgba(255, 255, 255, 1)'
  },

  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
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
    this.closeModal = this.closeModal.bind(this);
    const appElement = document.getElementById('root');
    Modal.setAppElement(appElement);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  afterOpenModal() {
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  update (property) {
    return e => this.setState({[property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const moderator_id = this.props.userId;
    const channel = Object.assign({}, this.state, { moderator_id });
    this.props.createChannel(channel);
  }

  render() {
    return(
      <Modal
        isOpen={this.props.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
        <div className='escape-button-wrapper'>
          <button onClick={this.closeModal}>
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
      </Modal>
    );
  }
}

export default ChannelForm;
