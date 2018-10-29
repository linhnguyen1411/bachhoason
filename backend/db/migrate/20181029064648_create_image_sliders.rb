class CreateImageSliders < ActiveRecord::Migration[5.1]
  def change
    create_table :image_sliders do |t|
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
