class CreatePromos < ActiveRecord::Migration[5.2]
  def change
    create_table :promos do |t|
      t.string :code
      t.string :description

      t.timestamps
    end
  end
end
