class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      Subscription.create!(
      user_id: @channel.moderator_id,
      channel_id: @channel.id
      )
      render @channel
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def index
    @channels = Channel.all
  end

  def show
    @channel = Channel.includes(:messages, :users).find(params[:id])
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :description, :private, :moderator_id, :DM)
  end
end
