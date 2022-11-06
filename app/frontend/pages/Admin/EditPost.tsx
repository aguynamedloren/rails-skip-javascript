import { useSinglePostQuery } from '/graphql/generated-types'
import { Heading } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import EditPostForm from '/components/EditPostForm'

const EditPost: React.FC = () => {
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

        <EditPostForm {...post} />
      </>
    )
  }
}

export default EditPost
