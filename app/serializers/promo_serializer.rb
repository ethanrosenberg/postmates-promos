class PromoSerializer < ActiveModel::Serializer
  attributes :id, :code, :description, :success, :failure, :comments, :created_at
end
