class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      if @channel.moderator_id
        Subscription.create!(
        user_id: @channel.moderator_id,
        channel_id: @channel.id
        )
      else
        params[:channel][:users].each do |user|
          Subscription.create!(
            user_id: user.id,
            channel_id: @channel.id
          )
        end
      end
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
    params.require(:channel).permit(:name, :description, :private, :moderator_id)
  end
end
