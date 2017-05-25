class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      Subscription.create!(
        user_id: @user.id,
        channel_id: Channel.find_by_name('general').id
      )
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
