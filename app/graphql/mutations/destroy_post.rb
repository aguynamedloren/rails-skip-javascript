module Mutations
  class DestroyPost < BaseMutation
    # arguments passed to the `resolve` method
    argument :uuid, ID, required: true

    # Just returning id is okay
    field :uuid, ID, null: true

    # return type from the mutation
    # type Types::PostType

    def resolve(uuid:)
      post = Post.find_by(uuid: uuid)

      post.destroy!
    end
  end
end
