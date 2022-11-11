import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

const Login: React.FC = () => {
  const onSubmit = values => {
    console.log(values)
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
        <Button
          mt={4}
          colorScheme='teal'
          isLoading={isSubmitting}
          type='submit'
        >
          Submit
        </Button>
      </form>
    </>
  )
}

export default Login
