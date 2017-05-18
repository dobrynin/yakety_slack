import React from 'react';
import ChannelIndexItem from './channel_index_item';

class ChannelIndex extends React.Component {

  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {
    const { channels } = this.props;
    debugger
    return (
    <div>
      <h1>Channels: </h1>
      {channels.map(channel => (
        <ChannelIndexItem channel={channel} key={channel.id}/>
      ))}
    </div>
  )}
}

export default ChannelIndex;
