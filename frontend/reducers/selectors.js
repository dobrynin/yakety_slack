export const asArray = resource => (
  Object.keys(resource).map(key => resource[key])
);

export const selectChannels = channels => (
  channels.filter(channel => channel.DM === false)
);

export const selectDMs = channels => (
  channels.filter(channel => channel.DM === true)
);
