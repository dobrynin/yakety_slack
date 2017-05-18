class CreateSubscriptions < ActiveRecord::Migration[5.0]
  def change
    create_table :subscriptions do |t|
      t.integer :user_id
      t.integer :channel_id

      t.timestamps
    end

    add_index :subscriptions, [:channel_id, :user_id], unique: true
    add_index :subscriptions, [:user_id, :channel_id]
  end
end
