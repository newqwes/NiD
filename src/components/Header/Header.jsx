import React from 'react';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.row}>
          <div className={style.logo}>Night Dream Social Network</div>
          {props.auth.isAuth ? (
            <div>
              <NavLink className={style.login} to='/login'>
                {props.auth.login} ID:{props.auth.id}
              </NavLink>
              <button onClick={props.logout}>Выйти</button>
            </div>
          ) : (
            <NavLink className={style.login} to='/login'>
              Войти
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
