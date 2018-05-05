class AddStylesheetToStaticPagesPages < ActiveRecord::Migration[5.1]
  def change
    add_column :static_pages_pages, :stylesheet, :text
    add_column :static_pages_pages, :stylesheet_baked, :text
  end
end
