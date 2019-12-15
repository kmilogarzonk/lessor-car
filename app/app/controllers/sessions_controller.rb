class SessionsController < ApplicationController

  skip_before_action :authorized, only: [:new, :create, :welcome]

  def new
  end

  def create
    data = ses_params.to_h
    @user = User.find_by(username: data[:username])
    if @user && @user.authenticate(data[:password_digest])
      sessions[:user_uid] = @user.uid
      render json: {state: true, desc: "Usuario autenticado"}
    else
      render json: {state: false, desc: "No existe usuario"}
    end
  end

  def login
  end

  def welcome
  end

  def page_requires_login
  end

  private

  def ses_params
    params.permit(:username, :password_digest)
  end
end
