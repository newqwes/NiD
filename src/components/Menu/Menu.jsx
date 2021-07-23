import s from './Menu.module.scss';
import MenuItem from './MenuItem/MenuItem';

const Menu = ({ menuItemData, exchangeRate }) => (
  <nav className={s.menu}>
    <ul className={s.ul}>
      {menuItemData.map(m => (
        <MenuItem key={m.id} value={m.value} linkUrl={m.linkUrl} />
      ))}
    </ul>
    <div className={s.infoWtapper}>
      <div className={s.titleMoney}>
        <h2>1$ = {exchangeRate}руб.</h2>
      </div>
    </div>
  </nav>
);

export default Menu;
