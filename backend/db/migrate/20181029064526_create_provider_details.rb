class CreateProviderDetails < ActiveRecord::Migration[5.1]
  def change
    create_table :provider_details do |t|
      t.integer :provider_id
      t.integer :paint_id

      t.timestamps
    end
  end
end
