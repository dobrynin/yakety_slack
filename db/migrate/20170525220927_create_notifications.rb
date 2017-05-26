class CreateNotifications < ActiveRecord::Migration[5.0]
  def change
    create_table :notifications do |t|
      t.integer :user_id
      t.integer :channel_id
      t.integer :count

      t.timestamps
    end

    add_index :notifications, [:user_id, :channel_id], unique: true
  end
end
