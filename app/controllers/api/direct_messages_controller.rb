class Api::DirectMessagesController < ApplicationController
  def create
    users = params[:direct_message][:user_ids].map do |user_id|
      User.find(user_id)
    end
    dn_name = users.map(&:username).sort.join(', ')
    @dm = Channel.find_by_name(dn_name)
    unless @dm
      @dm = Channel.new(
          name: dn_name,
          description: nil,
          DM: true,
          moderator_id: nil
      )
      @dm.save
      users.each do |user|
        Subscription.create!(
          user_id: user.id,
          channel_id: @dm.id
        )
      end
    end
    render @dm
  end

  private

  def direct_message_params
    params.require(:direct_message).permit(user_ids: [])
  end
end
