import s from './FormsControl.module.scss';

export const TextareaCostom = ({ input, meta, ...props }) => (
  <div className={s.wrapperTextarea}>
    {meta.touched && meta.error ? <span>{meta.error}</span> : ' '}
    <textarea
      className={s.textarea + ' ' + (meta.touched && meta.error ? s.error : ' ')}
      {...props}
      {...input}
    />
  </div>
);

export const InputCostom = ({ input, meta, ...props }) => (
  <div className={s.wrapperInput}>
    {meta.touched && meta.error ? <span>{meta.error}</span> : ' '}
    <input
      className={s.input + ' ' + (meta.touched && meta.error ? s.error : ' ')}
      {...props}
      {...input}
    />
  </div>
);
