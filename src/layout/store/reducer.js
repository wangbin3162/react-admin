import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
import { getAdminSetting, setAdminSetting } from '../../config/datastore'

let setting = getAdminSetting()

// header 独立的状态管理,类似于vuex中的module模块,单独管理自己的状态和action
const defaultState = fromJS({
  collapsed: setting.collapsed // 侧边栏收起状态
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_SIDEBAR:
      // 设置新状态并存储值localstorage
      setting.collapsed = !state.get('collapsed')
      setAdminSetting({ ...setting })
      return state.set('collapsed', setting.collapsed)
    default:
      return state
  }
}
