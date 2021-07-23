import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = ({ auth, logout }) => (
  <header className={s.header}>
    <div className={s.wrapper}>
      <div className={s.row}>
        <div className={s.logo}>Night Dream Social Network</div>
        {auth.isAuth ? (
          <div>
            <NavLink className={s.login} to='/login'>
              {auth.login} ID:{auth.id}
            </NavLink>
            <button onClick={logout}>Выйти</button>
          </div>
        ) : (
          <NavLink className={s.login} to='/login'>
            Войти
          </NavLink>
        )}
      </div>
    </div>
  </header>
);

export default Header;
