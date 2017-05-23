

App.messages = App.cable.subscriptions.create('MessagesChannel', {
  received: function(data) {
    return $('#message-index-items').append(this.renderMessage(data));
  },

  renderMessage: function(data) {
    return "<p> <b>" + data.user_id + ": </b>" + data.body + "</p>";
  }
});
