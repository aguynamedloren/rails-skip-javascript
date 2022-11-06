import { Post as PostType } from '/graphql/generated-types'
import { Link } from 'react-router-dom'
import { Box, Heading, Text } from '@chakra-ui/react'

const Post: React.FC<PostType> = ({ uuid, title, body, comments }) => {
  return (
    <Box mb='5'>
      <Heading size='xl' mb='5'>
        <Link to={`/posts/${uuid}`}>{title}</Link>
      </Heading>

      <Text mb='4'>{body}</Text>

      <Text fontWeight='500'>{comments.length} comments</Text>
    </Box>
  )
}

export default Post
