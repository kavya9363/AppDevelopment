import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './services/redux/store'
import { ChakraProvider } from '@chakra-ui/react'
import { States } from './services/States';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
  <BrowserRouter>
    <Provider store={store}>
      <States>
      <App />
      </States>
    </Provider>
  </BrowserRouter>
  </ChakraProvider>
)
