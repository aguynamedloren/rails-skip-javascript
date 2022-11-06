import { useForm } from 'react-hook-form'

import {
  FormErrorMessage,
  FormControl,
  Textarea,
  Button
} from '@chakra-ui/react'

const CommentForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm()

  async function onSubmit (values) {
    return await new Promise(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
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
