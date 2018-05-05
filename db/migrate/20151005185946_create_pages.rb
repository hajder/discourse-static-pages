class CreatePages < ActiveRecord::Migration[5.1]
  def change
    create_table :static_pages_pages do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.timestamps
    end
  end
end
