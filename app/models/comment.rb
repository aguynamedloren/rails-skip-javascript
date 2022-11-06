class Comment < ApplicationRecord
  include Uuid

  belongs_to :post
end
