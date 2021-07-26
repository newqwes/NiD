// import { map } from 'lodash/fp';
import { Menu as AntMenu } from 'antd';
import { NavLink } from 'react-router-dom';

// import s from './AntMenu.module.scss';
// import MenuItem from './MenuItem/MenuItem';

// const menuItemData = [
//   { value: 'Мой профиль', linkUrl: '/Profile' },
//   { value: 'Сообщения', linkUrl: '/Dialogs' },
//   { value: 'Пользователи', linkUrl: '/Users' },
// ];

const Menu = () => {
  return (
    <AntMenu defaultSelectedKeys='1'>
      <AntMenu.Item key='/Profile'>
        <NavLink to='/Profile'>Мой профиль</NavLink>
      </AntMenu.Item>
      <AntMenu.Item key='/Dialogs'>Сообщения</AntMenu.Item>
      <AntMenu.Item key='/Users'>Пользователи</AntMenu.Item>
    </AntMenu>
  );
};

// <nav className={s.menu}>
//   <ul className={s.ul}>
//     {map(
//       ({ value, linkUrl }) => (
//         <MenuItem key={linkUrl} value={value} linkUrl={linkUrl} />
//       ),
//       menuItemData,
//     )}
//   </ul>
// </nav>

export default Menu;
