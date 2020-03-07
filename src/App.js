import React from 'react'
import store from './store'
import { Provider } from 'react-redux'


function App(props) {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}

export default App
