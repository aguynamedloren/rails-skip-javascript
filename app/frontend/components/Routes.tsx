import { withGraphqlProvider } from '/components/graphqlProvider'
import Posts from '/pages/Posts'
import About from '/pages/About'
import ErrorPage from '/pages/ErrorPage'

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      { 
        index: true,
        element: <Posts />
      },
      {
        path: '/about',
        element: <About />
      }          
    ]
  },
])

const Routes: React.FC = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default withGraphqlProvider(Routes)
