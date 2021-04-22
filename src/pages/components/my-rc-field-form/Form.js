import React from "react";
import FieldContext from "./FieldContext";

// 因为在这里要使用hook方法
export default function Form({ children, form, onFinish, onFinishFailed }) {
  form.setCallback({
    onFinish,
    onFinishFailed,
  });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        form.submit();
      }}
    >
      <FieldContext.Provider value={form}>{children}</FieldContext.Provider>
    </form>
  );
}
