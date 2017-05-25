class ChannelsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "user_#{params[:user_id]}"
  end

  def receove(data)
    ActionCable.server.broadcast("user_#{:params[:user_id]}", data)
  end
end
