class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    if @message.save
      channel = @message.channel
      ActionCable.server.broadcast(
        "channel_#{@message.channel_id}",
        id:         @message.id,
        body:       @message.body,
        user_id:    @message.user_id,
        created_at: @message.created_at
      )
      channel.users.each do |user|
        ActionCable.server.broadcast(
          "user_#{user.id}",
          DM:           channel.DM,
          created_at:   channel.created_at,
          description:  channel.description,
          id:           channel.id,
          moderator_id: channel.moderator_id,
          name:         channel.name
        )
      end

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
