class Paint < ApplicationRecord

  extend FriendlyId
  friendly_id :name, use: [:slugged, :finders]

  def normalize_friendly_id(input)
    ConvertEnNameService.normalize_with_hyphen(input).downcase
  end

  has_many :provider_details
  has_many :providers, through: :provider_details
  has_many :paints

  before_create :conver_title

  def should_generate_new_friendly_id?
    name_changed? || super
  end

  def conver_title
    ConvertEnNameService.normalize_with_hyphen(self.name)
  end
end
