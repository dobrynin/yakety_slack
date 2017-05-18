import React from 'react';
import ChannelIndexItem from './channel_index_item';
import { selectChannels, selectDMs } from '../../reducers/selectors';
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
      <div className='channels'>
        <h1>Channels <span>({channels.length})</span></h1>
        {channels.map(channel => (
          <ChannelIndexItem channel={channel} key={channel.id}/>
        ))}
      </div>
      <div className='direct-messages'>
        <h1>Direct Messages </h1>
        {DMs.map(DM => (
          <ChannelIndexItem channel={DM} key={DM.id}/>
        ))}
      </div>
    </div>
  )}
}

export default ChannelIndex;
