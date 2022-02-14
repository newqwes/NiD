import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { LogoutOutlined } from '@ant-design/icons';

import { logout } from '../../actionCreators/thunk';
import { HeaderWrapper, HeaderLogo, HeaderLogin } from './styled';

const Header = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  return (
    <HeaderWrapper>
      <HeaderLogo>Night Dream Social Network</HeaderLogo>
      {auth.isAuth ? (
        <div>
          <HeaderLogin to='/login'>
            {auth.login} ID:{auth.id}
          </HeaderLogin>
          <Button onClick={handleLogout} type='primary' shape='circle' icon={<LogoutOutlined />} />
        </div>
      ) : (
        <HeaderLogin to='/login'>Войти</HeaderLogin>
      )}
    </HeaderWrapper>
  );
};

export default Header;
