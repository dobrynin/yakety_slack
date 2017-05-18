class RemoveModeratorIdValidation < ActiveRecord::Migration[5.0]
  def change
    change_column_null :channels, :moderator_id, true
  end
end
