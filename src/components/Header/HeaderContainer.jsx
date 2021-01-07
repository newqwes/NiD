import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { loadLogout } from '../../redux/actions';
import { compose } from 'redux';

const HeaderContainer = (props) => <Header {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  loadLogout,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(HeaderContainer);
