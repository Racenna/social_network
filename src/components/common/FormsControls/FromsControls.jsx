import React from "react";
import styles from "./FromsControls.module.css";

export const Textarea = ({ input, meta, className, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.container}>
      <div>
        <textarea
          className={className + " " + (hasError ? styles.error : "")}
          {...input}
          {...props}
        />
      </div>
      {hasError && <span className={styles.span_error}>{meta.error}</span>}
    </div>
  );
};

export const Input = ({ input, meta, className, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.container}>
      <div>
        <input
          className={className + " " + (hasError ? styles.error : "")}
          {...input}
          {...props}
        />
      </div>
      {hasError && <span className={styles.span_error}>{meta.error}</span>}
    </div>
  );
};
