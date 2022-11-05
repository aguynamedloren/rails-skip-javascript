module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :books, [Types::BookType], null: false
    field :posts, [Types::PostType], null: false

    def books
      Book.all
    end

    def posts
      Post.all
    end
  end
end
