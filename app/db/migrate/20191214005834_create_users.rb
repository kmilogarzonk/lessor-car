class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users, id: false, primary_key: :uid do |t|
      t.string :uid, null: false, index: { unique: true }, limit: 200, primary_key: true
      t.string :identification_number
      t.string :username
      t.string :password_digest
      t.string :email
      t.integer :phone_number

      t.timestamps
    end
  end
end
