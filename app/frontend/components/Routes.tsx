import { withGraphqlProvider } from '/components/graphqlProvider'
import Posts from '/pages/Posts'

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Posts />
  }
])

const Routes: React.FC = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default withGraphqlProvider(Routes)
