class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.integer :category_id
      t.integer :admin_id
      t.string :title
      t.string :description
      t.text :content

      t.timestamps
    end
  end
end
