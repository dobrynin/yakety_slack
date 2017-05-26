class Api::NotificationsController < ApplicationController

  def destroy
    notification = Notification.get_notification(
      params[:notification][:userId],
      params[:notification][:channelId]
    )
    notification.reset!
    render json: notification
  end

  private

  def notification_params
    params.require(:notification).permit(:userId, :channelId)
  end
end
