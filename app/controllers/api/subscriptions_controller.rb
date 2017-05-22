class Api::SubscriptionsController < ApplicationController
  def create
    subscription = Subscription.new(subscription_params)
    subscription.save
    @user = subscription.user
    render "api/users/show"
  end

  private

  def subscription_params
    params.require(:subscription).permit(:user_id, :channel_id)
  end
end
