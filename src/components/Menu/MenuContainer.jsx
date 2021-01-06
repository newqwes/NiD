import { connect } from 'react-redux';
import { getRates } from '../../redux/sidebar/actions';
import React, { useEffect } from 'react';
import { compose } from 'redux';
import Menu from './Menu';

const MenuContainer = ({ getRates, ...props }) => {
  useEffect(() => {
    getRates();
  }, [getRates]);

  return <Menu {...props} />;
};

const mapStateToProps = (state) => ({
  menuItemData: state.menuSideBar.menuItemData,
  exchangeRate: state.menuSideBar.exchangeRate,
});

export default compose(connect(mapStateToProps, { getRates }))(MenuContainer);
