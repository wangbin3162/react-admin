import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import Layout from './layout'

function App() {
  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  )
}

export default App
