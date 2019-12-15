class User < ApplicationRecord
  has_secure_password
  has_many :ride  
  has_many :lessor 
end
