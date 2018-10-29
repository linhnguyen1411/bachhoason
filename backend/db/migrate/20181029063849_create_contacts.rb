class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :address
      t.string :phone
      t.string :email
      t.string :title
      t.string :content

      t.timestamps
    end
  end
end
