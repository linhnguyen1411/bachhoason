class Product < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: [:slugged, :finders]

  has_many :product_images

  belongs_to :admin
  belongs_to :provider
  belongs_to :paint

  has_one :product_detail
end
