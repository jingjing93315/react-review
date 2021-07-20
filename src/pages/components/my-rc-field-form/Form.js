import React from "react";
import FieldContext from "./FieldContext";
import useForm from './useForm'

// 因为在这里要使用hook方法
export default function Form({ children, form, onFinish, onFinishFailed },ref) {
  const [formInstance] = useForm(form)
  React.useImperativeHandle(ref,() => formInstance)
  formInstance.setCallback({
    onFinish,
    onFinishFailed,
  });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        formInstance.submit();
      }}
    >
      <FieldContext.Provider value={formInstance}>{children}</FieldContext.Provider>
    </form>
  );
}
