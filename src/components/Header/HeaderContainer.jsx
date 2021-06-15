import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { logout } from '../../actionCreators/thunk';

const HeaderContainer = props => {
  return <Header {...props} />;
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default compose(connect(mapStateToProps, { logout }))(HeaderContainer);
