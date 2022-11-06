import { Post as PostType } from '/graphql/generated-types'
import { Container, Heading, Text } from '@chakra-ui/react'

const Post: React.FC<PostType> = ({ title, body, comments }) => {
  return (
    <Container mb='5'>
      <Heading size='xl' mb='5'>
        {title}
      </Heading>

      <Text mb='4'>{body}</Text>

      <Text fontWeight='500'>{comments.length} comments</Text>
    </Container>
  )
}

export default Post
