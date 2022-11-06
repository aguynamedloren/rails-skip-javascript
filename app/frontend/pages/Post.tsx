import { useSinglePostQuery } from '/graphql/generated-types'
import { Box, Heading, Text, List, ListItem } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import Comment from '/components/Comment'

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
    const {
      post: { body, title, comments }
    } = data
    return (
      <>
        <Heading size='xl' mb='5'>
          {title}
        </Heading>
        <Text>{body}</Text>

        {comments.length > 0 && (
          <Box mt='5'>
            <Heading size='large'>Comments</Heading>

            <List spacing={2}>
              {comments.map((comment: Comment) => (
                <Comment key={comment.uuid} {...comment} />
              ))}
            </List>
          </Box>
        )}
      </>
    )
  }
}

export default PostPage
