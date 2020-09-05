import Menu from "./Menu";
import { connect } from "react-redux";
import { getRates } from "../../redux/sidebar-reducer";
import React, { useEffect } from "react";
import { compose } from "redux";
import Preloader from "../common/Preloader/Preloader";

const MenuContainer = (props) => {
  useEffect(() => {
    props.getRates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!props.userProfile) {
    return <Preloader />;
  }
  return <Menu {...props} avatar={props.userProfile.photos.large} />;
};
const mapStateToProps = (state) => {
  return {
    menuItemData: state.menuSideBar.menuItemData,
    exchangeRate: state.menuSideBar.exchangeRate,
    isAuth: state.auth.isAuth,
    userProfile: state.profilePage.userProfile,
  };
};
export default compose(connect(mapStateToProps, { getRates }))(MenuContainer);
