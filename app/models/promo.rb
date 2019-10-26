class Promo < ApplicationRecord

  has_many :ratings
  has_many :comments

  def created_at
    attributes['created_at'].strftime("%m/%d")
    #attributes['created_at'].strftime("%m/%d/%Y %H:%M")
  end

end
