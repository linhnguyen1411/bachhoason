class CreateBranches < ActiveRecord::Migration[5.1]
  def change
    create_table :branches do |t|
      t.string :name
      t.integer :admin_id
      t.string :address
      t.string :phone

      t.timestamps
    end
  end
end
