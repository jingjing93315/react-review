import React, { Component } from "react";
import { connect } from "react-redux";
export default connect(
  // mapStateToProps 把state映射到props上
  (state) => ({
    num: state,
  }),
  {
    add: () => ({
      type: "ADD",
    }),
  }

  // mapDispatchToProps 把dispatch映射到props
)(
  class ReactReduxPage extends Component {
    render() {
      console.log("props", this.props);
      const { num, dispatch,add} = this.props;
      return (
        <div>
          <h3>ReactReduxPage</h3>
          <p>{num}</p>
          {/* <button onClick={() => dispatch({ type: "ADD" })}>add</button> */}
          <button onClick={add}>add</button>
        </div>
      );
    }
  }
);
