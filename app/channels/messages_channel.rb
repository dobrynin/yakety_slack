class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "channel_#{params[:channel_id]}"
  end

  def receive(data)
    ActionCable.server.broadcast("channel_#{params[:channel_id]}", data)
  end
end
