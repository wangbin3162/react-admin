import { combineReducers } from 'redux-immutable'
import { reducer as layoutReducer } from '../layout/store'

// 类似于vuex的module合并,会将这部分的内容封装至不同的参数下单独管理即header:{header单独的state状态管理}
export default combineReducers({
  layout: layoutReducer
})
