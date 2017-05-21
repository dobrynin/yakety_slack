import React from 'react';
import ChannelIndexItem from './channel_index_item';
import { selectChannels, selectDMs } from '../../reducers/selectors';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ChannelIndex extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    const appElement = document.getElementById('root');
    Modal.setAppElement(appElement);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {
    let { channels, direct_messages } = this.props;
    const DMs = selectDMs(channels);
    channels = selectChannels(channels);

    return (
    <div className='channel-index'>
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
        <h2 ref={this.subtitle}>Hello</h2>
        <button onClick={this.closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
      <div className='channels'>
        <div className='channels-header'>
          <h2 className='channel-index-header'>CHANNELS <span>({channels.length})</span></h2>
          <button className='new-channel-button' onClick={this.openModal}>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </button>
        </div>
        {channels.map(channel => (
          <ChannelIndexItem channel={channel} key={channel.id}/>
        ))}
      </div>
      <div className='direct-messages'>
        <h2 className='channel-index-header'>DIRECT MESSAGES</h2>
        {DMs.map(DM => (
          <ChannelIndexItem channel={DM} key={DM.id}/>
        ))}
      </div>
    </div>
  );}
}

export default ChannelIndex;
