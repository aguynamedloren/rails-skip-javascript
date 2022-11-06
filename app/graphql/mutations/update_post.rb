module Mutations
  class UpdatePost < BaseMutation
    # arguments passed to the `resolve` method
    argument :uuid, ID, required: true
    argument :title, String, required: false
    argument :body, String, required: false

    # return type from the mutation
    type Types::PostType

    def resolve(uuid:, **attributes)
      post = Post.find_by(uuid: uuid)
      post.update!(attributes)
    end
  end
end
