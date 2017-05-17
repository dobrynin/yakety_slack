class CreateChannels < ActiveRecord::Migration[5.0]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.string :description
      t.boolean :private, default: false
      t.integer :moderator_id, null: false

      t.timestamps
    end

    add_index :channels, :name, unique: true
    add_index :channels, :moderator_id
  end
end
