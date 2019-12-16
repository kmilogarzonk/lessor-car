class SessionsController < ApplicationController

  skip_before_action :authorized, only: [:new, :create, :welcome]

  def new
  end

  def create
    data = ses_params.to_h
    @user = User.find_by(username: data[:username])
    byebug
    if @user && @user.authenticate(data[:password])
      sessions[:user_uid] = @user.uid
      render json: {state: true, desc: "Usuario autenticado"}
    else
      render json: {state: false, desc: "No existe usuario"}
    end
  end

  def delete
    if !sessions[:user_uid].blank?
      sessions[:user_uid] = nil
      render json: {state: true, desc: "Sesion finalizada"}
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
    params.permit(:username, :password)
  end
end
