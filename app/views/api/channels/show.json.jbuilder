json.currentChannel do
  json.partial! 'channel', channel: @channel
end

json.messages do
  @channel.messages.each do |message|
    json.partial '../messages/message', message: message
  end
end

json.users do
  @channel.users.each do |user|
    json.partial '../users/user', user: user
  end
end
