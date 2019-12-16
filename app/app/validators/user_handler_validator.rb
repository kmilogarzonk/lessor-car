class UserHandlerValidator < ActiveModel::Validator
  def validate(record)
    case record.validate_fn
    when "create"
      create(record)
    else
      puts "Not found"
    end 
  end

  def create(record)
    if record.identification_number.blank? || record.password.blank? || record.email.blank?
      error = []
      error << "Identification is required (identification_number)" if record.identification_number.blank?
      error << "Password is required (password)" if record.password.blank?
      error << "Email is required (email)" if record.email.blank?
      raise ApiExceptions::UserError::MissingParams.new(error.join(', ')) if error.size > 0
    end
  end
end