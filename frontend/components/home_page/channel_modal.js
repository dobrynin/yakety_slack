import React from 'react';
import ChannelFormContainer from './channel_form_container';
import Modal from 'react-modal';
import DirectMessageFormContainer from './direct_message_form_container';
import ChannelListContainer from './channel_list_container';

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


class ChannelModal extends React.Component {

  constructor(props) {
    super(props);
    const appElement = document.getElementById('root');
    Modal.setAppElement(appElement);
  }

  modalSelector() {
    switch(this.props.modalType) {
      case 'channel':
        return <ChannelFormContainer closeModal={ this.props.closeModal }/>;
      case 'direct-message':
        return <DirectMessageFormContainer closeModal={ this.props.closeModal }/>;
      case 'channel-list':
        return <ChannelListContainer closeModal={ this.props.closeModal } />;
    }
  }

  render () {
    return (
      <Modal
      isOpen={this.props.modalIsOpen}
      onRequestClose={this.props.closeModal}
      style={customStyles}
      contentLabel="Channel Modal"
      >
        { this.modalSelector() }
      </Modal>
    );
  }
}

export default ChannelModal;
