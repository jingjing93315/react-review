import React, { Component } from 'react'
import store from '../../store/'

export default class ReduxPage extends Component {
  componentDidMount() {
    //状态发生变化，执行订阅
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }
  componentWillUnmount() {
    // 取消订阅
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }
  add = () => {
    // 修改状态
    store.dispatch({ type: 'ADD', payload: 10 })
  }
  asyAdd = () => {
    store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        dispatch({ type: 'ADD' })
      }, 1000)
    })
  }
  add2 = ()=>{
    store.dispatch({type:"ADD2", payload: 100})
  }
  render() {
    return (
      <div>
        <h3>ReduxPage</h3>
        <p>{store.getState().count}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.asyAdd}>asy add</button>
        <button onClick={this.add2}>{store.getState().count2.num}</button>
      </div>
    )
  }
}
