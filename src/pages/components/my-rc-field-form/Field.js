import React, { Component, cloneElement } from "react";
import FieldContext from "./FieldContext";

export default class Field extends Component {
  static contextType = FieldContext;

  componentDidMount() {
    const { registerField } = this.context;
    this.unregisterField = registerField(this);
  }

  componentWillUnmount() {
    if (this.unregisterField) {
      this.unregisterField();
    }
  }
  // store变化，执行刷新方法
  onStoreChange = () => {
    this.forceUpdate();
  };

  getControlled = () => {
    const { name } = this.props;
    const { getFieldValue, setFieldValue } = this.context;
    return {
      value: getFieldValue(name), // 一个仓库存储,get
      onChange: (event) => {
        const newVal = event.target.value;
        console.log(newVal);
        setFieldValue({
          [name]: newVal,
        });
        // 重新设置 执行仓库set函数
      },
    };
  };
  render() {
    const { children } = this.props;
    const returnChildren = cloneElement(children, this.getControlled());
    return returnChildren;
  }
}
