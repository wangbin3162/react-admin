import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'


function App(props) {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        {props.children}
      </ConfigProvider>
    </Provider>
  )
}

export default App
