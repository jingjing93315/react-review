import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from "redux";
import { bindActionCreators, connect } from '../../gReactRedux'
// connect原理 高阶组件hoc
export default connect(
  // mapStateToProps 把state映射到props上
  (state) => ({
    num: state.count,
  }),
  // mapDispatchToProps object|function 把dispatch放到props上一份
  // {
  //   add: () => ({
  //     type: "ADD",
  //   }),
  // }
  (dispatch) => {
    let creators = {
      add: () => ({ type: 'ADD', payload: 100 }),
      minus: () => ({ type: 'MINUS', payload: 100 }),
    }
    creators = bindActionCreators(creators, dispatch)
    return { dispatch, ...creators }
  }

  // mapDispatchToProps 把dispatch映射到props
)(
  class ReactReduxPage extends Component {
    render() {
      console.log('props', this.props)
      const { num, add, minus, dispatch } = this.props
      return (
        <div>
          <h3>ReactReduxPage</h3>
          <p>{num}</p>
          <button onClick={() => dispatch({ type: 'ADD' })}>
            dispatch add
          </button>
          <button onClick={add}>add</button>
          <button onClick={minus}>minus</button>
        </div>
      )
    }
  }
)
