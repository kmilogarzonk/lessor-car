class UserService < ApplicationService

  attr_reader :identification_number, :password_digest, :email, :phone_number, :validate_fn
  
  validates_with UserHandlerValidator

  def initialize(data)
    @data = data
    @data.each do |k,v|
      instance_variable_set("@#{k}", v) unless v.nil?
    end
  end

  def create
    self.valid?
    userNew = {
      identification_number: @identification_number,
      email: @email,
      username: @identification_number,
      password_digest: @password_digest,
      phone_number: @phone_number
    }
    user = User.create(userNew)
    user
  end
end