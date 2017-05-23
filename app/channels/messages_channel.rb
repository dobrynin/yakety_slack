class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "channel_#{params[:channel_id]}"
  end

  def unsubscribe
    stop_all_streams
  end
end
