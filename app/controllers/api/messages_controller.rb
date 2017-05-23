class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    if @message.save
      ActionCable.server.broadcast("channel_#{@message.channel_id}",
        id: @message.id,
        body: @message.body,
        user_id: @message.user_id,
        created_at: @message.created_at)
      render 'api/messages/show'
    else
      render json: @message, status: :unprocessable_entity
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :user_id, :channel_id, :avatar_url)
  end
end
