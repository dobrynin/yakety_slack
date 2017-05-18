class ChangePrivateColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :channels, :private, :DM
  end
end
