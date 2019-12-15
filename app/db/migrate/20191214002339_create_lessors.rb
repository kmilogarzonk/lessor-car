class CreateLessors < ActiveRecord::Migration[6.0]
  def change
    create_table :lessors, id: false, primary_key: :uid do |t|
      t.string :uid, null: false, index: { unique: true }, limit: 200, primary_key: true
      t.string :property_card
      t.string :licency
      t.string :address
      t.string :user_uid

      t.timestamps
    end
    add_foreign_key :lessors, :users, column: :user_uid, primary_key: :uid
  end
end
