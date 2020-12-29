import React from 'react';
import style from './FormsControl.module.scss';

const ErrorMessage = ({ meta }) => {
  return meta.touched && meta.error ? <span>{meta.error}</span> : ' ';
};

export const TextareaCustom = ({ input, meta, ...props }) => {
  return (
    <div className={style.wrapperTextarea}>
      <ErrorMessage meta={meta} />
      <textarea
        className={style.textarea + ' ' + (meta.touched && meta.error ? style.error : ' ')}
        {...props}
        {...input}
      />
    </div>
  );
};

export const InputCustom = ({ input, meta, ...props }) => {
  return (
    <div className={style.wrapperInput}>
      <ErrorMessage meta={meta} />
      <input
        className={style.input + ' ' + (meta.touched && meta.error ? style.error : ' ')}
        {...props}
        {...input}
      />
    </div>
  );
};
