class Category < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: [:slugged, :finders]

  has_many :articles

  validates :name, presence: true

  def should_generate_new_friendly_id?
    name_changed?
  end
end
