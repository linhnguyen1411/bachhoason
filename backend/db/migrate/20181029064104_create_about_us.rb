class CreateAbouts < ActiveRecord::Migration[5.1]
  def change
    create_table :about_us do |t|
      t.string :name
      t.string :image
      t.string :video_url
      t.string :content
      t.integer :admin_id
      t.string :address
      t.string :hotline
      t.string :phone
      t.string :email
      t.string :register_number
      t.string :register_code
      t.string :register_place
      t.string :tax_code

      t.timestamps
    end
  end
end
