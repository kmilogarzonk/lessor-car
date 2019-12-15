class Lessor < ApplicationRecord
  has_many :car
  has_many :ride
end
