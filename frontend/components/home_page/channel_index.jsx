import React from 'react';
import ChannelIndexItem from './channel_index_item';
import { selectChannels, selectDMs } from '../../reducers/selectors';

import ChannelForm from './channel_form';

class ChannelIndex extends React.Component {


  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {
    let { channels, direct_messages } = this.props;
    const DMs = selectDMs(channels);
    channels = selectChannels(channels);

    return (
    <div className='channel-index'>
      <ChannelForm />
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
