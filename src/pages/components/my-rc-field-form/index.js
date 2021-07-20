import React from 'react'
import _Form from "./Form";
import useForm from "./useForm";
import Field from "./Field";

// forwardRef实现转发ref
const Form = React.forwardRef(_Form);

Form.useForm = useForm;
Form.Field = Field;

export { Field, useForm };
export default Form;

