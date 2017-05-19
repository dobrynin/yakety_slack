export const createMessage = data => (
  $.ajax({
    method: 'POST',
    url: 'api/messages',
    data
  })
);
