import React from 'react'
import store from './store'
import Layout from './layout'
import {Provider} from 'react-redux'


function App() {
  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  )
}

export default App
