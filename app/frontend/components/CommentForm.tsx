import { useForm } from 'react-hook-form'
import { gql, useMutation } from '@apollo/client'
import { SinglePostDocument } from '/graphql/generated-types'

import {
  FormErrorMessage,
  FormControl,
  Textarea,
  Button
} from '@chakra-ui/react'

const CREATE = gql`
  mutation createCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      uuid
      text
    }
  }
`

const CommentForm: React.FC<{ postUuid: string }> = ({ postUuid }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting }
  } = useForm()

  const [createComment, { loading, error }] = useMutation(CREATE, {
    onCompleted: () => {
      reset()
    },
    refetchQueries: [
      { query: SinglePostDocument, variables: { uuid: postUuid } }
    ]
  })

  const onSubmit = values => {
    createComment({ variables: { input: { postUuid, ...values } } })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.text}>
        <Textarea
          id='text'
          placeholder='Write comment here...'
          {...register('text', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' }
          })}
        />
        <FormErrorMessage>
          {errors.text != null && errors.text.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
  )
}

export default CommentForm
