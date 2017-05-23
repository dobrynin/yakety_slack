import React from 'react';
import ChannelIndexItem from './channel_index_item';
import { selectChannels, selectDMs } from '../../reducers/selectors';
import ChannelModal from './channel_modal';

class ChannelIndex extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.modalType = '';

  }

  openModal(modalType) {
    this.modalType = modalType;
    this.setState({modalIsOpen: true});
  }

  componentDidMount() {
    this.props.fetchChannels();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.channels.length !== this.props.channels.length) {
      this.props.fetchChannels();
    }
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    let { channels, direct_messages } = this.props;
    const DMs = selectDMs(channels);
    channels = selectChannels(channels);
    return (
    <div className='channel-index'>
      <ChannelModal
        modalIsOpen={this.state.modalIsOpen}
        closeModal={this.closeModal}
        modalType={this.modalType}/>
      <div className='channels'>
        <div className='channels-header'>
          <button className='channel-index-header' onClick={() => this.openModal('channel-list')}>CHANNELS <span>({this.props.allChannels.length})</span></button>
          <button className='new-channel-button' onClick={() => this.openModal('channel')}>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </button>
        </div>
        {channels.map(channel => (
          <ChannelIndexItem channel={channel} key={channel.id}/>
        ))}
      </div>
      <div className='channels'>
        <div className='channels-header'>
          <h2 className='channel-index-header'>DIRECT MESSAGES</h2>
          <button className='new-channel-button' onClick={() => this.openModal('direct-message')}>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </button>
        </div>
        {DMs.map(DM => (
          <ChannelIndexItem channel={DM} key={DM.id}/>
        ))}
      </div>
    </div>
  );}
}

export default ChannelIndex;
