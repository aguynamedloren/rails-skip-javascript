module Mutations
  class CreateComment < BaseMutation
    # arguments passed to the `resolve` method
    argument :text, String, required: true
    argument :post_uuid, ID, required: true

    # return type from the mutation
    type Types::CommentType

    def resolve(text: nil, post_uuid: nil)
      post = Post.find_by(uuid: post_uuid)

      post.comments.create!(text: text)
    end
  end
end
