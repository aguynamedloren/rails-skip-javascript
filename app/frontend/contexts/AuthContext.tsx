import { useContext, createContext } from 'react'
import { useCookies } from 'react-cookie'

const AuthContext = createContext()

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const auth = useProvideAuth()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(AuthContext)
}

// Provider hook that creates auth object and handles state
function useProvideAuth () {
  const [, setCookie] = useCookies([
    'auth-access-token',
    'auth-client',
    'auth-uid'
  ])

  const signin = ({ accessToken, client, expiry, uid }) => {
    const config = {
      expires: new Date(expiry * 1000),
      path: '/',
      sameSite: 'strict'
    }

    setCookie('auth-access-token', accessToken, config)
    setCookie('auth-client', client, config)
    setCookie('auth-uid', uid, config)
  }

  const signout = () => {}

  return {
    signin,
    signout
  }
}
