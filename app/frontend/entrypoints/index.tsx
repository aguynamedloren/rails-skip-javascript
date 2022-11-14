import React from 'react'
import ReactDOM from 'react-dom'
import Routes from '/components/Routes'
import { ChakraProvider } from '@chakra-ui/react'
import { CookiesProvider } from 'react-cookie'

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <ChakraProvider>
        <Routes />
      </ChakraProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
