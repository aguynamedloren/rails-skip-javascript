module Types
  class MutationType < Types::BaseObject
    field :destroy_post, mutation: Mutations::DestroyPost
    field :create_comment, mutation: Mutations::CreateComment
  end
end
