class ApplicationController < ActionController::Base

  before_action :authorized
  helper_method :current_user
  helper_method :logged_in?

  def current_user    
    User.find_by(uid: session[:user_uid])  
  end

  def logged_in?     
    !current_user.nil?  
  end

  def authorized
    redirect_to '/home' unless logged_in?
 end

  rescue_from ApiExceptions::BaseException,
  :with => :render_error_response

  def render_error_response(error)
    render json: error, serializer: ApiExceptionsSerializer, status: error.status
  end
end
