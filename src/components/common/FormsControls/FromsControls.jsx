import React from "react";
import { Field } from "redux-form";
import styles from "./FromsControls.module.css";

export const Textarea = ({
  input,
  meta: { touched, error },
  className,
  ...props
}) => {
  const hasError = touched && error;
  return (
    <div className={styles.container}>
      <div>
        <textarea
          className={className + " " + (hasError ? styles.error : "")}
          {...input}
          {...props}
        />
      </div>
      {hasError && <span className={styles.span_error}>{error}</span>}
    </div>
  );
};

export const Input = ({
  input,
  meta: { touched, error },
  className,
  ...props
}) => {
  const hasError = touched && error;
  return (
    <div className={styles.container}>
      <div>
        <input
          className={className + " " + (hasError ? styles.error : "")}
          {...input}
          {...props}
        />
      </div>
      {hasError && <span className={styles.span_error}>{error}</span>}
    </div>
  );
};

export const CreatField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = ""
) => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      validate={validators}
      component={component}
      {...props}
    />
    {text}
  </div>
);
