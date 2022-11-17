import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from '/contexts/AuthContext'

const AdminLayout: React.FC = () => {
  if (isAuthenticated()) {
    return <Outlet />
  } else {
    return <Navigate to='/' replace />
  }
}

export default AdminLayout
