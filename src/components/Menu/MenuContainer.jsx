import Menu from "./Menu";
import { connect } from "react-redux";
import { getRates } from "../../redux/sidebar-reducer";
import React from "react";
import { compose } from "redux";

class MenuContainer extends React.Component {
  componentDidMount() {
    this.props.getRates();
  }
  render() {
    return <Menu {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    menuItemData: state.menuSideBar.menuItemData,
    exchangeRate: state.menuSideBar.exchangeRate,
    isAuth: state.auth.isAuth,
  };
};
export default compose(connect(mapStateToProps, { getRates }))(MenuContainer);
