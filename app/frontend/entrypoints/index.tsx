import React from 'react'
import ReactDOM from 'react-dom'
import Routes from '/components/Routes'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
