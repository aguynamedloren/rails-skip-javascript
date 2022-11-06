module Uuid
  extend ActiveSupport::Concern

  included do
    before_create :set_uuid
  end

  private

  def set_uuid
    if uuid.blank?
      self.uuid = SecureRandom.uuid
    end
  end
end
