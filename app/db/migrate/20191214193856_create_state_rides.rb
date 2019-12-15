class CreateStateRides < ActiveRecord::Migration[6.0]
  def change
    create_table :state_rides, id: false, primary_key: :uid do |t|
      t.string :uid, null: false, index: { unique: true }, limit: 200, primary_key: true
      t.string :ride_uid
      t.string :state_uid

      t.timestamps
    end
    add_foreign_key :state_rides, :rides, column: :ride_uid, primary_key: :uid
    add_foreign_key :state_rides, :states, column: :state_uid, primary_key: :uid
  end
end
