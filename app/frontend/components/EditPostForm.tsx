import {
  Post,
  useUpdatePostMutation,
  SinglePostDocument,
  AllPostsDocument
} from '/graphql/generated-types'

import { useToast } from '@chakra-ui/react'

import PostForm from '/components/PostForm'

const EditPostForm: React.FC<Post> = ({ uuid, title, body }) => {
  const toast = useToast()

  const [updatePost, { loading, error }] = useUpdatePostMutation({
    onCompleted: () => {
      toast({
        position: 'top',
        title: 'Post updated',
        status: 'success',
        duration: 3000,
        isClosable: true
      })
    },
    refetchQueries: [
      { query: SinglePostDocument, variables: { uuid } },
      { query: AllPostsDocument }
    ]
  })

  const onSubmit = values => {
    updatePost({ variables: { input: { uuid, ...values } } })
  }

  return <PostForm title={title} body={body} onSubmit={onSubmit} />
}

export default EditPostForm
