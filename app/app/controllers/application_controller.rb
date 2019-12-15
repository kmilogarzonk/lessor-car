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
end
