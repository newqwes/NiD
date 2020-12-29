import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DialogsPeople.module.scss';

const DialogsPeople = ({ urlDialog, urlAvatarDialog, namePerson }) => {
  return (
    <NavLink to={urlDialog} activeClassName={style.active} className={style.a}>
      <img src={urlAvatarDialog} alt='аватар' />
      <span className={style.nameDialog}>{namePerson}</span>
    </NavLink>
  );
};

export default DialogsPeople;
