import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth';
import { compose } from 'redux';

const HeaderContainer = (props) => <Header {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default compose(connect(mapStateToProps, { logout }))(HeaderContainer);
