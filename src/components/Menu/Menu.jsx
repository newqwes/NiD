import { NavLink } from 'react-router-dom';
import { Menu as AntMenu } from 'antd';

const Menu = () => (
  <AntMenu defaultSelectedKeys='1'>
    <AntMenu.Item key='1'>
      <NavLink to='/Profile'>Мой профиль</NavLink>
    </AntMenu.Item>
    <AntMenu.Item key='2'>
      <NavLink to='/Dialogs'>Сообщения</NavLink>
    </AntMenu.Item>
    <AntMenu.Item key='3'>
      <NavLink to='/Users'>Пользователи</NavLink>
    </AntMenu.Item>
  </AntMenu>
);

export default Menu;
