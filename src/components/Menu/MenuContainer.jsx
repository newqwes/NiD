import { connect } from 'react-redux';
import { loadRates } from '../../redux/actions';
import React, { useEffect } from 'react';
import { compose } from 'redux';
import Menu from './Menu';

const MenuContainer = ({ loadRates, ...props }) => {
  useEffect(() => {
    loadRates();
  }, [loadRates]);

  return <Menu {...props} />;
};

const mapStateToProps = (state) => ({
  menuItemData: state.menuSideBar.menuItemData,
  exchangeRate: state.menuSideBar.exchangeRate,
});

export default compose(connect(mapStateToProps, { loadRates }))(MenuContainer);
