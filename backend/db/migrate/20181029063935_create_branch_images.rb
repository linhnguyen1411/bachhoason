class CreateBranchImages < ActiveRecord::Migration[5.1]
  def change
    create_table :branch_images do |t|
      t.integer :branch_id
      t.string :image

      t.timestamps
    end
  end
end
