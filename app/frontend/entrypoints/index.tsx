import React from 'react'
import ReactDOM from 'react-dom'
import Routes from '/components/Routes'
import { ChakraProvider } from '@chakra-ui/react'
import { CookiesProvider } from 'react-cookie'
import { AuthProvider } from '/contexts/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <AuthProvider>
        <ChakraProvider>
          <Routes />
        </ChakraProvider>
      </AuthProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
