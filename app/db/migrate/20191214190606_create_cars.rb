class CreateCars < ActiveRecord::Migration[6.0]
  def change
    create_table :cars, id: false, primary_key: :uid do |t|
      t.string :uid, null: false, index: { unique: true }, limit: 200, primary_key: true
      t.string :plaque
      t.string :registration_number
      t.string :lessor_uid

      t.timestamps
    end
    add_foreign_key :cars, :lessors, column: :lessor_uid, primary_key: :uid
  end
end
