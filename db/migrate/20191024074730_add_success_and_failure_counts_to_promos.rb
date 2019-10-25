class AddSuccessAndFailureCountsToPromos < ActiveRecord::Migration[5.2]
  def change
    add_column :promos, :success, :integer
    add_column :promos, :failure, :integer
  end
end
