class Provider < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: [:slugged, :finders]

  has_many :provider_details
  has_many :paint, through: :provider_details
  has_many :product
  has_many :quotations
end
