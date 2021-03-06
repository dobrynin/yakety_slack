import React from 'react';
import { withRouter } from 'react-router-dom';
import ChannelListItemContainer from './channel_list_item_container';
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

class ChannelList extends React.Component {
  render() {
    return(
      <div className='channel-form-wrapper'>
        <div className='escape-button-wrapper' onClick={this.props.closeModal}>
          <button>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
          <div>esc</div>
        </div>

        <h2 className='create-channel'>Browse all {this.props.channels.length} channels</h2>
        <ul className='channel-list'>
          {this.props.channels.map( (channel, idx) => <ChannelListItemContainer key={idx} channel={channel} closeModal={this.props.closeModal} />)}
        </ul>
      </div>
    );
  }
}

export default ChannelList;
