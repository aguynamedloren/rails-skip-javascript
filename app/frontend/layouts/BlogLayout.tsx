import { Outlet } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import WithSubnavigation from '/components/Navigation'

const BlogLayout: React.FC = () => {
  return (
    <>
      <WithSubnavigation />
      <Container pt='10'>
        <Outlet />
      </Container>
    </>
  )
}

export default BlogLayout
