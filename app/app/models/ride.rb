class Ride < ApplicationRecord
  has_many :state_ride
  has_many :pay
end
