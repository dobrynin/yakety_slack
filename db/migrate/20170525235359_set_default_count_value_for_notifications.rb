class SetDefaultCountValueForNotifications < ActiveRecord::Migration[5.0]
  def change
    change_column_default :notifications, :count, default: 0
  end
end
