module Mutations
  class CreatePost < BaseMutation
    # arguments passed to the `resolve` method
    argument :body, String, required: true
    argument :title, String, required: true

    # return type from the mutation
    type Types::PostType

    def resolve(title:, body:)
      Post.create!(title: title, body: body)
    end
  end
end
