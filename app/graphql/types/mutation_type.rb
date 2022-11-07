module Types
  class MutationType < Types::BaseObject
    field_class GraphqlDevise::Types::BaseField
    field :create_post, mutation: Mutations::CreatePost
    field :update_post, mutation: Mutations::UpdatePost
    field :destroy_post, mutation: Mutations::DestroyPost
    field :create_comment, mutation: Mutations::CreateComment
  end
end
