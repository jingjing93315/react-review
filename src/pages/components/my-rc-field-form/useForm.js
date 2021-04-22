import React from "react";
// 定义一个仓库存储
class FormStore {
  constructor(props) {
    this.store = {};

    // 存储Field实例

    this.fieldEntities = [];
    this.callbacks = {};
  }

  registerField = (entity) => {
    this.fieldEntities.push(entity);
    return () => {
      // 取消注册
      this.fieldEntities = this.fieldEntities.filter((item) => item !== entity);
      delete this.store[entity.props.name];
    };
  };
  setCallback = (callback) => {
    this.callbacks = {
      ...this.callbacks,
      ...callback,
    };
  };

  setFieldValue = (newStore) => {
    this.store = {
      ...this.store,
      ...newStore,
    };
    console.log("store", this.store);

    //store已经更新，下一步更新组件

    this.fieldEntities.forEach((entity) => {
      const { name } = entity.props;
      Object.keys(newStore).forEach((key) => {
        if (name === key) {
          entity.onStoreChange();
        }
      });
    });
  };
  getFieldValue = (name) => {
    return this.store[name];
  };

  validate = () => {
    let err = [];
    this.fieldEntities.forEach((entity) => {
      const { name, rules } = entity.props;
      let value = this.getFieldValue(name);
      let rule = rules && rules[0];
      if ((rule && rule.required && value === undefined) || value === "") {
        // error
        err.push({
          [name]: rule.message,
          value,
        });
      }
    });
    return err;
  };
  submit = () => {
    console.log("提交数据");
    // 1.校验
    // 2. 根据校验结果，执行不同函数
    let err = this.validate()
    const {onFinish, onFinishFailed} = this.callbacks
    if(err.length === 0) {
        onFinish()
    }else if(err.length > 0){
        onFinishFailed(err)
    }
    
  };
  getForm = () => {
    return {
      submit: this.submit,
      setCallback: this.setCallback,
      getFieldValue: this.getFieldValue,
      setFieldValue: this.setFieldValue,
      registerField: this.registerField,
    };
  };
}
// 自定义hook
export default function useForm() {
  const formRef = React.useRef();
  if (!formRef.current) {
    const formStore = new FormStore();
    formRef.current = formStore.getForm();
  }

  return [formRef.current];
}
