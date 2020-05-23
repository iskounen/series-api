class RenameSeriesNameToTitle < ActiveRecord::Migration[6.0]
  def change
    rename_column :series, :name, :title
  end
end
