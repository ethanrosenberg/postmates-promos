class PromoSerializer < ActiveModel::Serializer
  attributes :id, :code, :description, :success, :failure
end
