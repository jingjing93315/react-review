import React, { Component } from "react";
import propTypes from "prop-types";

export default class LifeCyclePage extends Component {
  static defaultProps = {
    msg: "一线蓝光",
  };
  static propTypes = {
    msg: propTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    const { count } = state;
    return count > 5 ? { count: 0 } : null;
  }
  //   componentWillMount() {
  //     console.log("componentWillMount");
  //   }

  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    const { count } = nextState;
    console.log("shouldComponentUpdate", nextState, this.state);
    return count !== 3;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    return null
  }
  //   componentWillUpdate() {
  //     console.log("componentWillUpdate");
  //   }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  setCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    console.log("render");
    const { count } = this.state;
    return (
      <div>
        <h3>LifeCyclePage</h3>
        <p>{count}</p>

        <button onClick={this.setCount}>改变count</button>
        {/* {count % 2 && <Child count={count} />} */}
        <Child count={count} />
      </div>
    );
  }
}

class Child extends Component {
  // 初次渲染时不会执行，只有在已挂载组件接收新的props的时候，才会执行
  //   componentWillReceiveProps(nextProps) {
  //     console.log("componentWillReceiveProps", nextProps);
  //   }
  //   componentWillUnmount() {
  //     console.log("componentWillUnmount");
  //   }
  render() {
    console.log("child render");
    const { count } = this.props;

    return (
      <div>
        <h3>Child</h3>
        <p>{count}</p>
      </div>
    );
  }
}
