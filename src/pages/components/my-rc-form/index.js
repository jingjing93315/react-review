import React, { Component } from "react";
export function createForm(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.options = {};
    }
    setFieldsValue = (newStore) => {
      this.setState(newStore);
    };

    getFieldDecorator = (fieldName, options) => (InputCmp) => {
      this.options[fieldName] = options;
      return React.cloneElement(InputCmp, {
        name: fieldName,
        value: this.state[fieldName] || "",
        onChange: this.handleChange,
      });
    };

    validateFields = (callback) => {
      let err = [];
      for (let fieldName in this.options) {
        if (this.state[fieldName] === undefined) {
          err.push({
            [fieldName]: "err",
          });
        }
      }
      if (err.length === 0) {
        callback(null, { ...this.state });
      } else {
        callback(err, { ...this.state });
      }
    };
    getFieldsValue = () => {
      return { ...this.state };
    };
    getFieldValue = (name) => {
      return this.state[name];
    };

    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };
    getForm = () => {
      return {
        getFieldsValue: this.getFieldsValue,
        getFieldValue: this.getFieldValue,
        getFieldDecorator: this.getFieldDecorator,
        setFieldsValue: this.setFieldsValue,
        validateFields: this.validateFields
      };
    };
    render() {
      const form = this.getForm();
      return <Cmp {...this.props} form={form} />;
    }
  };
}
