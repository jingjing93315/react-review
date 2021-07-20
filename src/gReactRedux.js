import React, { useLayoutEffect, useReducer, useContext } from 'react'
// 1. 创建一个context对象
const Context = React.createContext()
// 2. 使用Context.Provider把store传递下来
export function Provider({ store, children }) {
  return <Context.Provider value={store}>{children}</Context.Provider>
}
// 3. 利用connect得到新组件，新组件上有state和dispatch
// mapStateToProps: function
// mapStateToProps
export const connect = (
  mapStateToProps = (state) => state,
  mapDispatchToProps
) => (WrappedComponent) => (props) => {
  // todo 给新返回组件的props加上store，state，dispatch，这里dispatch不是特指dispatch方法
  // 获取store
  const store = React.useContext(Context)
  const { dispatch, getState, subscribe } = store
  const stateProps = mapStateToProps(getState())
  let dispatchProps = { dispatch }
  if (typeof mapDispatchToProps === 'object') {
    dispatchProps = bindActionCreator(mapDispatchToProps, dispatch)
  } else if (typeof mapDispatchToProps === 'function') {
    dispatchProps = mapDispatchToProps(dispatch)
  }

  // 函数组件当中引起更新
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0)
  useLayoutEffect(
    () => {
      const unsubscribe = store.subscribe(() => {
        // component update forceUpdate
        forceUpdate()
      })
      return () => {
        if (unsubscribe) {
          unsubscribe()
        }
      }
    },
    [store]
  )
  return <WrappedComponent {...props} {...stateProps} {...dispatchProps} />
}

function bindActionCreator(creator, dispatch) {
  return (...args) => dispatch(creator(...args))
}
export function bindActionCreators(creators, dispatch) {
  let obj = {}
  // todo 遍历
  for (let key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch)
  }

  return obj
}

// 自定义hook
export function useSelector(selector) {
  // 获取 store state
  const store = useStore()
  const { getState } = store
  const selectedState = selector(getState())

  // 函数组件当中引起更新
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0)
  useLayoutEffect(
    () => {
      const unsubscribe = store.subscribe(() => {
        // component update forceUpdate
        forceUpdate()
      })
      return () => {
        if (unsubscribe) {
          unsubscribe()
        }
      }
    },
    [store]
  )
  return selectedState
}

function useStore() {
  const store = useContext(Context)
  return store
}

export function useDispatch() {
  const store = useStore()
  return store.dispatch
}
