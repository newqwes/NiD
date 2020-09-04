import Menu from "./Menu";
import { connect } from "react-redux";
import { getRates } from "../../redux/sidebar-reducer";
import React, { useEffect } from "react";
import { compose } from "redux";

const MenuContainer = (props) => {
  useEffect(() => {
    props.getRates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Menu {...props} />;
};
const mapStateToProps = (state) => {
  return {
    menuItemData: state.menuSideBar.menuItemData,
    exchangeRate: state.menuSideBar.exchangeRate,
    isAuth: state.auth.isAuth,
  };
};
export default compose(connect(mapStateToProps, { getRates }))(MenuContainer);
