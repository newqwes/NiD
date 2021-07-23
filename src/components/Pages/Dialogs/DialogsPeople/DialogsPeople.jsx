import s from './DialogsPeople.module.scss';
import { NavLink } from 'react-router-dom';

const DialogsPeople = ({ urlDialog, urlAvatarDialog, namePerson }) => (
  <NavLink to={urlDialog} activeClassName={s.active} className={s.a}>
    <img src={urlAvatarDialog} alt='' />
    <span className={s.nameDialog}>{namePerson}</span>
  </NavLink>
);

export default DialogsPeople;
