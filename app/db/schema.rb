# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_14_193856) do

  create_table "cars", primary_key: "uid", id: :string, limit: 200, force: :cascade do |t|
    t.string "plaque"
    t.string "registration_number"
    t.string "lessor_uid"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["uid"], name: "index_cars_on_uid", unique: true
  end

  create_table "lessors", primary_key: "uid", id: :string, limit: 200, force: :cascade do |t|
    t.string "property_card"
    t.string "licency"
    t.string "address"
    t.string "user_uid"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["uid"], name: "index_lessors_on_uid", unique: true
  end

  create_table "pays", primary_key: "uid", id: :string, limit: 200, force: :cascade do |t|
    t.string "ride_uid"
    t.string "state_uid"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["uid"], name: "index_pays_on_uid", unique: true
  end

  create_table "rides", primary_key: "uid", id: :string, limit: 200, force: :cascade do |t|
    t.string "time"
    t.string "distance"
    t.string "price"
    t.string "coord_init"
    t.string "coord_end"
    t.string "lessor_uid"
    t.string "user_uid"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["uid"], name: "index_rides_on_uid", unique: true
  end

  create_table "state_rides", primary_key: "uid", id: :string, limit: 200, force: :cascade do |t|
    t.string "ride_uid"
    t.string "state_uid"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["uid"], name: "index_state_rides_on_uid", unique: true
  end

  create_table "states", primary_key: "uid", id: :string, limit: 200, force: :cascade do |t|
    t.string "state"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["uid"], name: "index_states_on_uid", unique: true
  end

  create_table "users", primary_key: "uid", id: :string, limit: 200, force: :cascade do |t|
    t.string "identification_number"
    t.string "email"
    t.string "username"
    t.string "password_digest"
    t.integer "phone_number"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["uid"], name: "index_users_on_uid", unique: true
  end

  add_foreign_key "cars", "lessors", column: "lessor_uid", primary_key: "uid"
  add_foreign_key "pays", "rides", column: "ride_uid", primary_key: "uid"
  add_foreign_key "pays", "states", column: "state_uid", primary_key: "uid"
  add_foreign_key "rides", "lessors", column: "lessor_uid", primary_key: "uid"
  add_foreign_key "rides", "users", column: "user_uid", primary_key: "uid"
  add_foreign_key "lessors", "users", column: "user_uid", primary_key: "uid"
  add_foreign_key "state_rides", "rides", column: "ride_uid", primary_key: "uid"
  add_foreign_key "state_rides", "states", column: "state_uid", primary_key: "uid"
end
