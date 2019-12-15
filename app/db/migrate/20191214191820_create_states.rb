class CreateStates < ActiveRecord::Migration[6.0]
  def change
    create_table :states, id: false, primary_key: :uid do |t|
      t.string :uid, null: false, index: { unique: true }, limit: 200, primary_key: true
      t.string :state

      t.timestamps
    end
  end
end
