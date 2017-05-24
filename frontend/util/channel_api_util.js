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

export const createDM = direct_message => (
  $.ajax({
    method: 'POST',
    url: '/api/direct_messages',
    data: { direct_message }
  })
);
