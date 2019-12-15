module ApiExceptions
  class BaseException < StandardError
    include ActiveModel::Serialization
    extend ActiveModel::Naming
    attr_reader :status, :code, :message

    ERROR_DESCRIPTION = proc { |status, code, message| { status: status, code: code, message: message } }
    ERROR_CODE_MAP = {
      #User
      'UserError::UserNotFound' =>
        ERROR_DESCRIPTION.call(461, '8x021', 'User no exist'),
      'UserError::MissingParams'  =>
        ERROR_DESCRIPTION.call(460, '8x020', 'It takes parameters'),
    }.freeze

    def initialize(custom_message = nil)
      error_type = self.class.name.scan(/ApiExceptions::(.*)/).flatten.first
      ApiExceptions::BaseException::ERROR_CODE_MAP
        .fetch(error_type, {}).each do |attr, value|
        instance_variable_set("@#{attr}".to_sym, value)
      end

      @message += ", more details: #{custom_message}" unless custom_message.nil?
    end
  end
end
