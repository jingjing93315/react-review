export default function applyMiddleware(...middlewares) {
  return (createStore) => (reducer) => {
    //返回store，同时把dispatch加强
    const store = createStore(reducer)
    let dispatch = store.dispatch
    //todo 加强dispatch
    const midApi = {
      getState: store.getState,
      dispatch: (action) => dispatch(action),
    }
    const middlewareChain = middlewares.map((middleware) => middleware(midApi))
    dispatch = compose(...middlewareChain)(store.dispatch)

    return {
      ...store,
      dispatch,
    }
  }
}

function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if(funcs.length === 1){
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}