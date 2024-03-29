# frozen_string_literal: true

module Types
  class PostType < Types::BaseObject
    field :uuid, ID, null: false
    field :title, String
    field :body, String
    field :comments, [CommentType], null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
