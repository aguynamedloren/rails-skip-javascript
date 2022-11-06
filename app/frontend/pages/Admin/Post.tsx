import { useSinglePostQuery } from '/graphql/generated-types'
import { Box, Heading, Text, List, ListItem, Divider } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import PostForm from '/components/PostForm'

const PostPage: React.FC = () => {
  const { postId } = useParams()

  const { data, loading } = useSinglePostQuery({
    variables: {
      uuid: postId
    }
  })

  if (loading) {
    return <span>Loading...</span>
  } else {
    const { post } = data
    return (
      <>
        <Heading size='xl' mb='5'>
          Edit Post
        </Heading>
        <PostForm {...post} />
      </>
    )
  }
}

export default PostPage
