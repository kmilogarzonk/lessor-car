class Pay < ApplicationRecord
  belongs_to :ride, foreign_key: 'ride_uid'
  belongs_to :state, foreign_key: 'state_uid'
end
