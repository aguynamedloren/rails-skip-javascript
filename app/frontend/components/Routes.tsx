import { withGraphqlProvider } from '/components/graphqlProvider'
import BlogLayout from '/layouts/BlogLayout'
import Post from '/pages/Post'
import Posts from '/pages/Posts'
import About from '/pages/About'
import AdminNewPost from '/pages/Admin/NewPost'
import AdminEditPost from '/pages/Admin/EditPost'
import AdminPosts from '/pages/Admin/Posts'
import ErrorPage from '/pages/ErrorPage'
import Login from '/pages/Login'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BlogLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Posts />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/posts/:postId',
        element: <Post />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/admin/posts',
        element: <AdminPosts />
      },
      {
        path: 'admin/posts/:postId',
        element: <AdminEditPost />
      },
      {
        path: 'admin/posts/new',
        element: <AdminNewPost />
      }
    ]
  }
])

const Routes: React.FC = () => {
  return <RouterProvider router={router} />
}

export default withGraphqlProvider(Routes)
