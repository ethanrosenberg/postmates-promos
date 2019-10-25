class AddPromoIdForComment < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :promo_id, :integer
  end
end
