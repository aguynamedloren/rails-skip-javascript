# frozen_string_literal: true

module Types
  class CommentType < Types::BaseObject
    field :uuid, ID, null: false
    field :text, String
    field :post, PostType, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
