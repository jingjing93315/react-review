export default function createStore(reducer, enhancer) {
  if(enhancer){
    // 增强 createStore的dispatch
    return enhancer(createStore)(reducer)
  }
  let currentState
  let currentListener = []
  function getState() {
    return currentState
  }
  function dispatch(action) {
    currentState = reducer(currentState, action)
    currentListener.forEach((listener) => {
      listener()
    })
  }
  function subscribe(listener) {
    currentListener.push(listener)
    // 返回取消订阅的函数
    return () => {
      const index = currentListener.indexOf(listener)
      currentListener.splice(index, 1)
    }
  }

  // 手动执行dispatch，赋初始值
  dispatch({ type: 'KKKKKREDUX/00000' })
  return {
    getState,
    dispatch,
    subscribe,
  }
}
