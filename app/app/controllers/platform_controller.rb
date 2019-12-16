class PlatformController < ApplicationController

  skip_before_action :authorized, only: [:home]

  def home
    if logged_in?
      @user = JSON.parse(current_user.to_json, symbolize_names: true)
      @user[:lessor] = JSON.parse(Lessor.find_by(user_uid: @user[:uid]).to_json, symbolize_names: true)
      if !@user[:lessor].blank?
        @user[:lessor][:cars] = JSON.parse(Car.where(lessor_uid: @user[:lessor][:uid]).to_json, symbolize_names: true)
      end
    else
      @user = nil
      redirect_to '/'
    end
    @user
  end
end
