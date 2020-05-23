class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.integer :number
      t.references :series, null: false, foreign_key: true

      t.timestamps
    end
  end
end
