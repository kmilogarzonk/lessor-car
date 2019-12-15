require 'uuid'
class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  self.primary_key = :uid_gen
  before_create :createuid

  before_create :createuid
  after_initialize :uid_instance

  private
  def uid_instance
    @uid_gen  =  UUID.new
  end

  def createuid
    self.uid = @uid_gen.generate(:compact) if UUID.validate(self.uid).nil?
  end
end