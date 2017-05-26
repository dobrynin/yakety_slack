export const deleteNotifications = (userId, channelId) => {
  return(
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}/notifications/${channelId}`,
    data: {
      notification: {
        userId,
        channelId
      }
    }
  })
);};
