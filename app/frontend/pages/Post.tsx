import { useSinglePostQuery } from '/graphql/generated-types'
import { Box, Heading, Text, List, ListItem, Divider } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import Comment from '/components/Comment'
import CommentForm from '/components/CommentForm'

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
    const {
      post: { body, title, comments }
    } = data
    return (
      <>
        <Heading size='xl' mb='5'>
          {title}
        </Heading>
        <Text>{body}</Text>

        <Divider mt='10' />

        {comments.length > 0 && (
          <Box mt='5'>
            <Heading size='md'>Comments</Heading>

            <List spacing={2}>
              {comments.map((comment: Comment) => (
                <Comment key={comment.uuid} {...comment} />
              ))}
            </List>
          </Box>
        )}

        <Box py='10'>
          <Heading size='md' mb='5'>
            Leave a comment
          </Heading>

          <CommentForm />
        </Box>
      </>
    )
  }
}

export default PostPage
