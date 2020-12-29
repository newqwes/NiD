import React from 'react';
import s from './../DialogWithPeople.module.scss';

const DialogOwn = (props) => {
  return (
    <div className={s.containerOwn}>
      <div className={s.containerNameMessage}>
        <div className={s.nameOwn}>
          <h3>{props.nameOwn}</h3>
        </div>
        <div className={s.messageOwn}>
          <p>{props.textOwn}</p>
        </div>
      </div>
      <div className={s.imgOwn}>
        <img src={props.avatarOwn} alt={props.nameOwn} />
      </div>
    </div>
  );
};

export default DialogOwn;
