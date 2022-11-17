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

export const isAuthenticated = () => {
  const auth = useAuth()
  return auth?.loggedIn
}

// Provider hook that creates auth object and handles state
function useProvideAuth () {
  const [cookies, setCookie, removeCookie] = useCookies([
    'auth-access-token',
    'auth-client',
    'auth-uid'
  ])

  const loggedIn = !!cookies['auth-access-token']

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

  const signout = () => {
    const config = { path: '/' }

    removeCookie('auth-access-token', config)
    removeCookie('auth-client', config)
    removeCookie('auth-uid', config)
  }

  return {
    loggedIn,
    signin,
    signout
  }
}
