class UsersController < ApplicationController

  skip_before_action :authorized, only: [:new, :create]

  def new
    @user = User.new
  end

  def create
    data = usr_params.to_h
    data[:validate_fn] = "create"
    @user = UserService.new(data).create
    session[:user_uid] = @user.uid
    render json: {state: true, desc: "Usuario registrado"}
  end

  private

  def usr_params
    params.permit(:identification_number, :password, :email, :phone_number)
  end
end
