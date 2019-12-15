class SessionsController < ApplicationController

  skip_before_action :authorized, only: [:new, :create, :welcome]

  def new
  end

  def create
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      sessions[:user_uid] = @user.uid
      redirect_to '/home'
    else
      render json: "No existe usuario"
    end
  end

  def login
  end

  def welcome
  end

  def page_requires_login
  end
end
