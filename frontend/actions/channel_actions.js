export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_CHANNEL_DATA = 'RECEIVE_CHANNEL_DATA';
import * as APIUtil from '../util/channel_api_util';

export const createChannel = channel => dispatch => (
  APIUtil.createChannel(channel)
  .then(newChannel => dispatch(receiveChannel(newChannel)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchChannel = id => dispatch => (
  APIUtil.fetchChannelData(id)
  .then(channel => dispatch(receiveChannel(channel)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchChannels = () => dispatch => (
  APIUtil.fetchChannels()
  .then(channels => dispatch(receiveChannels(channels)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL_DATA,
  channel
});

const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
})

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
