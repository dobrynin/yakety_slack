
class Api::SubscriptionsController < ApplicationController
  def create
    subscription = Subscription.new(subscription_params)
    subscription.user_id ||= current_user.id
    subscription.save
    @user = subscription.user
    Notification.create!(user_id: subscription.user_id, channel_id: subscription.channel_id)
    render "api/users/show"
  end

  private

  def subscription_params
    params.require(:subscription).permit(:user_id, :channel_id)
  end
end
