class ApiExceptionsSerializer < ActiveModel::Serializer
  attributes :status, :code, :message
end
  