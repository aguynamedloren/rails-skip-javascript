import { Comment as CommentType } from 'graphql/generated-types'
import { ListItem, Text } from '@chakra-ui/react'

const Comment: React.FC<CommentType> = ({ text }) => {
  return (
    <ListItem>
      <Text pt='5'>{text}</Text>
    </ListItem>
  )
}

export default Comment
