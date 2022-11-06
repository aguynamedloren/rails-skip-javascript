import { useForm } from 'react-hook-form'
import { gql, useMutation } from '@apollo/client'
import {
  Post,
  useCreateCommentMutationMutation,
  SinglePostDocument
} from '/graphql/generated-types'

import {
  FormErrorMessage,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button
} from '@chakra-ui/react'

const PostForm: React.FC<Post> = ({ uuid, title, body }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      title,
      body
    }
  })

  // const [createComment, { loading, error }] = useCreateCommentMutationMutation({
  //   onCompleted: () => {
  //     reset()
  //   },
  //   refetchQueries: [
  //     { query: SinglePostDocument, variables: { uuid: postUuid } }
  //   ]
  // })

  const onSubmit = values => {
    // createComment({ variables: { input: { postUuid, ...values } } })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.title} mb='5'>
        <FormLabel>Title</FormLabel>
        <Input
          placeholder='Title'
          {...register('title', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' }
          })}
        />
        <FormErrorMessage>
          {errors.title != null && errors.title.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.body}>
        <FormLabel>Body</FormLabel>
        <Textarea
          id='body'
          h='200px'
          placeholder='Write post here...'
          {...register('body', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' }
          })}
        />
        <FormErrorMessage>
          {errors.body != null && errors.body.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
  )
}

export default PostForm
