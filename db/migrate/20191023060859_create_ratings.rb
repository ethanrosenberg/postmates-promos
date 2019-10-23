class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :success
      t.integer :failure
      t.string :comment

      t.timestamps
    end
  end
end
