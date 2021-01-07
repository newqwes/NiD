import { loadUsers, loadFollow, loadUnfollow, setUsersPage } from '../../../redux/actions';
import { connect } from 'react-redux';
import Users from './Users';
import React, { useEffect } from 'react';
import Preloader from '../../common/Preloader';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

const UsersContainer = (props) => {
  useEffect(() => {
    props.loadUsers({
      usersOnPage: props.usersOnPage,
      currentPageUsers: props.currentPageUsers,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const newSelectedPage = (currentPage) => {
    props.loadUsers(props.usersOnPage, currentPage);
    props.setUsersPage(currentPage);
  };
  return props.isUploaded ? <Users {...props} newSelectedPage={newSelectedPage} /> : <Preloader />;
};

const mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    usersOnPage: state.usersPage.usersOnPage,
    currentPageUsers: state.usersPage.currentPageUsers,
    totalAmountUsers: state.usersPage.totalAmountUsers,
    isUploaded: state.usersPage.isUploaded,
    isAnswerGone: state.usersPage.isAnswerGone,
  };
};

const mapDispatchToProps = {
  setUsersPage,
  loadUsers,
  loadFollow,
  loadUnfollow,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(UsersContainer);
