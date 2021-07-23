import { connect } from 'react-redux';
import { useEffect } from 'react';
import { compose } from 'redux';

import { getRates } from '../../actionCreators/thunk';
import Menu from './Menu';

const MenuContainer = props => {
  useEffect(() => {
    props.getRates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.getRates]);

  return <Menu {...props} />;
};

const mapStateToProps = state => ({
  menuItemData: state.menuSideBar.menuItemData,
  exchangeRate: state.menuSideBar.exchangeRate,
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = {
  getRates,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(MenuContainer);
