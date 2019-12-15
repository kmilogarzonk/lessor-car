class Car < ApplicationRecord  
  belongs_to :lessor, foreign_key: 'lessor_uid'
end
