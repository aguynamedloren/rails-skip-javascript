import { useSinglePostQuery } from '/graphql/generated-types'
import Post from '/components/Post'
import { Heading, Text } from '@chakra-ui/react'

import { useParams } from 'react-router-dom'

const PostPage: React.FC = props => {
  const { postId } = useParams()

  const { data, loading } = useSinglePostQuery({
    variables: {
      uuid: postId
    }
  })

  if (loading) {
    return <span>Loading...</span>
  } else {
    return (
      <>
        <Heading size='xl' mb='5'>
          {data.post.title}
        </Heading>
        <Text>{data.post.body}</Text>
      </>
    )
  }
}

export default PostPage
