export const createChannel = channel => (
  $.ajax({
    method: 'POST',
    url: '/api/channels',
    data: { channel }
  })
);

export const fetchChannels = (userId) => (
  $.ajax({
    method: 'GET',
    url: '/api/channels'
  })
);

export const fetchChannelData = id => (
  $.ajax({
    method: 'GET',
    url: `/api/channels/${id}`
  })
);
