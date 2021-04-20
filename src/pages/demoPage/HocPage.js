import React, { Component } from "react";

// hoc
// 是个函数参数是组件,返回值是新组件

const foo = (Cmp) => (props) => {
  return (
    <div className="border">
      <Cmp {...props} omg="omg" />
    </div>
  );
};

function Child(props) {
  return <div>Child</div>;
}

const Foo = foo(Child);


@foo

class ClassChild extends Component {
    render() { 
        return <div>ClassChild</div>;
    }
}
 

export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <Foo />
        <ClassChild/>
      </div>
    );
  }
}
