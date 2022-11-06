import { Outlet } from 'react-router-dom'

const BlogLayout: React.FC = () => {
  return (
    <main>
      <Outlet />
    </main>
  )
}

export default BlogLayout
