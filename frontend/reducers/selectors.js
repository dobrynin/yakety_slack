export const asArray = resource => {
  return Object.keys(resource).map(key => resource[key])
};

export const selectChannels = channels => {
  return channels.filter(channel => channel.DM === false)
}

export const selectDMs = channels => {
  return channels.filter(channel => channel.DM === true)
}
