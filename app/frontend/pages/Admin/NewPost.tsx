import { Heading } from '@chakra-ui/react'
import NewPostForm from '/components/NewPostForm'

const NewPost: React.FC = () => {
  return (
    <>
      <Heading size='xl' mb='5'>
        New Post
      </Heading>

      <NewPostForm />
    </>
  )
}

export default NewPost
