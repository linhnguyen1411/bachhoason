class Paint < ApplicationRecord

  extend FriendlyId
  friendly_id :name, use: [:slugged, :finders]

  has_many :provider_details
  has_many :providers, through: :provider_details
  has_many :paint
end
