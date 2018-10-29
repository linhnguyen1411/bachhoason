class CreateQuotations < ActiveRecord::Migration[5.1]
  def change
    create_table :quotations do |t|
      t.integer :provider_id
      t.string :image

      t.timestamps
    end
  end
end
