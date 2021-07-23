import { useState } from 'react';
import { useEffect } from 'react';

import s from './Profile.module.scss';

export const Status = props => {
  const [focus, setFocus] = useState(false);
  const [status, setStatus] = useState(props.status);

  const changeStatus = e => {
    setStatus(e.currentTarget.value);
  };

  const sendStatus = () => {
    setFocus(false);
    props.updateUserStatus(status);
  };

  const focusStatus = () => {
    setFocus(true);
  };

  const focusOff = () => {
    setFocus(false);
    setStatus(props.status);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <span className={s.containerStatus}>
      {focus ? (
        <div className={s.inputContainerStatus}>
          <input onChange={changeStatus} autoFocus={true} value={status} />
          <button onClick={sendStatus}>Изменить</button>
          <button onClick={focusOff}>Отмена</button>
        </div>
      ) : (
        <span onClick={focusStatus} className={s.spanContainerStatus}>
          {props.status || 'Нет статуса'}
        </span>
      )}
    </span>
  );
};
