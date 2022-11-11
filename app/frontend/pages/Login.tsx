import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useUserLoginMutation } from '/graphql/generated-types'

const Login: React.FC = () => {
  const toast = useToast()
  const navigate = useNavigate()

  const [loginUser, { loading, error }] = useUserLoginMutation({
    onCompleted: () => {
      toast({
        position: 'top',
        title: 'Logged in!',
        status: 'success',
        duration: 3000,
        isClosable: true
      })

      navigate('/admin/posts')
    }
  })

  const onSubmit = values => {
    loginUser({ variables: { ...values } })
  }

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm()
  return (
    <>
      <Heading size='xl' mb='5'>
        Login
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.email} mb='5'>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder='Email'
            type='email'
            {...register('email', {
              required: 'Email is required'
            })}
          />
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder='Password'
            type='password'
            {...register('password', {
              required: 'Password is required'
            })}
          />
        </FormControl>

        {error && (
          <Text mt='2' color='red.500'>
            {error.message}
          </Text>
        )}

        <Button
          mt={4}
          colorScheme='teal'
          isLoading={isSubmitting || loading}
          type='submit'
        >
          Submit
        </Button>
      </form>
    </>
  )
}

export default Login
