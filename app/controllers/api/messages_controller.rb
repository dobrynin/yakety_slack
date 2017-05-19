class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)

    if @message.save
      render :show
    else
      render json: @message, status: :unprocessable_entity
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :user_id, :channel_id)
  end
end
