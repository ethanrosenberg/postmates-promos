class PromoSerializer < ActiveModel::Serializer
  attributes :id, :code, :description, :ratings
end
