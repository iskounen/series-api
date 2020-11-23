class AddLastProcessedToBook < ActiveRecord::Migration[6.0]
  def change
    add_column :books, :last_processed_at, :datetime, limit: 6
  end
end
