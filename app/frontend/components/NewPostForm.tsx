import {
  Post,
  useCreatePostMutation,
  SinglePostDocument,
  AllPostsDocument
} from '/graphql/generated-types'

import { useToast } from '@chakra-ui/react'
import PostForm from '/components/PostForm'
import { useNavigate } from 'react-router-dom'

const NewPostForm: React.FC<Post> = () => {
  const toast = useToast()
  const navigate = useNavigate()

  const [createPost, { loading, error }] = useCreatePostMutation({
    onCompleted: () => {
      toast({
        position: 'top',
        title: 'Post created',
        status: 'success',
        duration: 3000,
        isClosable: true
      })

      navigate('/admin/posts')
    },
    refetchQueries: [{ query: AllPostsDocument }]
  })

  const onSubmit = values => {
    createPost({ variables: { input: { ...values } } })
  }

  return <PostForm onSubmit={onSubmit} />
}

export default NewPostForm
