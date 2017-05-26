import React from 'react';
import ChannelIndexItem from './channel_index_item';
import { selectChannels, selectDMs } from '../../reducers/selectors';
import ChannelModal from './channel_modal';
import { withRouter } from 'react-router-dom';

class ChannelIndex extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.modalType = '';
    this.addSocket = this.addSocket.bind(this);
  }

  addSocket() {
    window.App.cable.subscriptions.create({
      channel: 'ChannelsChannel',
      user_id: this.props.currentUser.id
    }, {
      connected: () => {},
      disconnected: () => {},
      received: notification => {
        this.props.receiveNotification(notification);
    }});
  }

  openModal(modalType) {
    this.modalType = modalType;
    this.setState({modalIsOpen: true});
  }

  componentDidMount() {
    this.addSocket();
    this.props.fetchChannels();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.allChannels.length !== this.props.allChannels.length) {
      this.props.fetchChannels();
    }
    if (nextProps.location.pathname !== this.props.location.pathname) {
      const channelId = parseInt(nextProps.location.pathname.replace('/channels/', ''));
      this.props.deleteNotifications(this.props.currentUser.id, channelId);
    }
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    let { channels, direct_messages, currentUser, allChannels } = this.props;
    const DMs = selectDMs(channels);
    channels = selectChannels(channels);
    allChannels = selectChannels(allChannels);
    return (
    <div className='channel-index'>
      <ChannelModal
        modalIsOpen={this.state.modalIsOpen}
        closeModal={this.closeModal}
        modalType={this.modalType}/>
      <div className='channels'>
        <div className='channels-header'>
          <button className='channel-index-header' onClick={() => this.openModal('channel-list')}>CHANNELS <span>({allChannels.length})</span></button>
          <button className='new-channel-button' onClick={() => this.openModal('channel')}>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </button>
        </div>
        {channels.map(channel => (
          <ChannelIndexItem channel={channel} key={`channel-${channel.id}`} notifications={this.props.notifications}/>
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
          <ChannelIndexItem currentUser={currentUser} channel={DM} key={DM.id} notifications={this.props.notifications}/>
        ))}
      </div>
    </div>
  );}
}

export default withRouter(ChannelIndex);
