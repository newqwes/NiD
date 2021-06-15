import s from './MenuItem.module.scss';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ linkUrl, value }) => (
  <li className={s.li}>
    <NavLink to={linkUrl} className={s.link} activeClassName={s.active}>
      {value}
    </NavLink>
  </li>
);

export default MenuItem;
