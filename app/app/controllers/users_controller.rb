class UsersController < ApplicationController

  skip_before_action :authorized, only: [:new, :create]

  def new
    @user = User.new
  end

  def create
    @user = User.create(params.permit(:username, :password))
    session[:user_uid] = @user.uid
    redirect_to '/home'
  end
end
