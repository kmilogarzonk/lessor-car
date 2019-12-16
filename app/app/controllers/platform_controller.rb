class PlatformController < ApplicationController

  skip_before_action :authorized, only: [:home]

  def home
    if logged_in?
      @user = current_user
    else
      @user = nil
      redirect_to '/'
    end
    @user.to_json
  end
end
