class Post < ApplicationRecord
  include Uuid

  has_many :comments, dependent: :destroy
end
