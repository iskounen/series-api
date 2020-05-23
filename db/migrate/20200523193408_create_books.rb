class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books, id: :uuid  do |t|
      t.integer :number, null: false
      t.references :series, null: false, foreign_key: true, type: :uuid
      t.timestamps
    end
  end
end
