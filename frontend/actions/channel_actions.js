export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const RECEIVE_CHANNEL_DATA = 'RECEIVE_CHANNEL_DATA';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';

import * as APIUtil from '../util/channel_api_util';

export const createChannel = channel => dispatch => (
  APIUtil.createChannel(channel)
  .then(newChannel => dispatch(receiveChannel(newChannel)),
    err => dispatch(receiveChannelErrors(err.responseJSON)))
);

export const createDM = DM => dispatch => (
  APIUtil.createDM(DM)
  .then(newDM => dispatch(receiveChannel(newDM)),
    err => dispatch(receiveChannelErrors(err.responseJSON)))
);

export const fetchChannelData = id => dispatch => (
  APIUtil.fetchChannelData(id)
  .then(data => dispatch(receiveChannelData(data)))
);

export const fetchChannels = () => dispatch => (
  APIUtil.fetchChannels()
  .then(channels => dispatch(receiveChannels(channels)),
    err => dispatch(receiveChannelErrors(err.responseJSON)))
);

const receiveChannelData = ({ users, messages }) => ({
  type: RECEIVE_CHANNEL_DATA,
  users,
  messages
});

const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

const receiveChannelErrors = errors => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors
});
