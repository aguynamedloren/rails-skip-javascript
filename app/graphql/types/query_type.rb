module Types
  class QueryType < Types::BaseObject
    field_class GraphqlDevise::Types::BaseField

    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :books, [Types::BookType], null: false
    field :posts, [Types::PostType], null: false

    field :post, Types::PostType do
      argument :uuid, ID
    end

    def books
      Book.all
    end

    def posts
      Post.all
    end

    def post(uuid:)
      Post.find_by(uuid: uuid)
    end
  end
end
