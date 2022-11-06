class Comment < ApplicationRecord
  belongs_to :post

  before_create :set_uuid

  private

  def set_uuid
    if uuid.blank?
      self.uuid = SecureRandom.uuid
    end
  end
end
