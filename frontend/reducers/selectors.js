export const asArray = channels => {
  return Object.keys(channels).map(key => channels[key])
};
