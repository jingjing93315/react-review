import { applyMiddleware, combineReducers, createStore } from 'redux'
// import { createStore, applyMiddleware, combineReducers } from '../gredux/index'
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'

// 定义state初始化和修改规则,reducer是一个纯函数
export const counterReducer = (state = 0, { type, payload = 1 })=> {
  switch (type) {
    case 'ADD':
      return state + payload
    case 'MINUS':
      return state - payload
    default:
      return state
  }
}
function counterReducer2(state = { num: 0 }, { type, payload = 1 }) {
  switch (type) {
    case 'ADD2':
      return { ...state, num: state.num + payload }
    default:
      return state
  }
}
const store = createStore(
  combineReducers({
    count: counterReducer,
    count2: counterReducer2,
  }),
  applyMiddleware(thunk, logger)
)
// 处理异步的thunk中间件
function thunk({ dispatch, getState }) {
  return (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }
    return next(action)
  }
}

function logger({ dispatch, getState }) {
  return (next) => (action) => {
    console.log('++++++++++++++++++++++++++++')
    // prev state
    const prevState = getState()
    console.log('prev state', prevState)

    // next state
    const returnValue = next(action)
    const nextState = getState()
    console.log('next state', nextState)

    return returnValue
  }
}
export default store
