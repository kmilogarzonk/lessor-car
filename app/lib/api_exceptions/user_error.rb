class ApiExceptions::UserError < ApiExceptions::BaseException
  class UserNotFound < ApiExceptions::UserError
  end
  class MissingParams < ApiExceptions::UserError
  end
end