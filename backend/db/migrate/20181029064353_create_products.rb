class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.integer :provider_id
      t.integer :paint_id
      t.string :name
      t.string :provider_price
      t.string :sale_price
      t.float :volume
      t.text :description
      t.text :content
      t.integer :admin_id
      t.string :slug

      t.timestamps
    end
  end
end
