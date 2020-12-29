import React from 'react';
import style from './MenuItem.module.scss';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ linkUrl, value }) => {
  return (
    <li className={style.li}>
      <NavLink to={linkUrl} className={style.link} activeClassName={style.active}>
        {value}
      </NavLink>
    </li>
  );
};

export default MenuItem;
