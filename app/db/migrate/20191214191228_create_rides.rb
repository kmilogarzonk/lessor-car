class CreateRides < ActiveRecord::Migration[6.0]
  def change
    create_table :rides, id: false, primary_key: :uid do |t|
      t.string :uid, null: false, index: { unique: true }, limit: 200, primary_key: true
      t.string :time
      t.string :distance
      t.string :price
      t.string :coord_init
      t.string :coord_end
      t.string :lessor_uid
      t.string :user_uid

      t.timestamps
    end
    add_foreign_key :rides, :lessors, column: :lessor_uid, primary_key: :uid
    add_foreign_key :rides, :users, column: :user_uid, primary_key: :uid
  end
end
