import React from 'react';
import style from './Menu.module.scss';
import MenuItem from './MenuItem';

const Menu = ({ menuItemData, exchangeRate }) => {
  return (
    <nav className={style.menu}>
      <ul className={style.ul}>
        {menuItemData.map((item) => (
          <MenuItem key={item.id} value={item.value} linkUrl={item.linkUrl} />
        ))}
      </ul>
      <div className={style.infoWtapper}>
        <div className={style.titleMoney}>
          <h2>1$ = {exchangeRate}руб.</h2>
        </div>
      </div>
    </nav>
  );
};
export default Menu;
