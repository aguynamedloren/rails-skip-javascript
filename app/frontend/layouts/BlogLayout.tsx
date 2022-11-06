import { Outlet } from 'react-router-dom'
import { Container } from '@chakra-ui/react'

const BlogLayout: React.FC = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  )
}

export default BlogLayout
