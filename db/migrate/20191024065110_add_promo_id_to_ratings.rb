class AddPromoIdToRatings < ActiveRecord::Migration[5.2]
  def change
    add_column :ratings, :promo_id, :integer
  end
end
