import React from 'react';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = ({ auth, loadLogout }) => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.row}>
          <div className={style.logo}>Night Dream Social Network</div>
          {auth.isAuth ? (
            <div>
              <NavLink className={style.login} to='/login'>
                {auth.login} ID:{auth.id}
              </NavLink>
              <button onClick={loadLogout}>Выйти</button>
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
