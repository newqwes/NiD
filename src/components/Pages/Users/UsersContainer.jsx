import { connect } from 'react-redux';
import React from 'react';
import { compose } from 'redux';

import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

import { setUsersPage } from '../../../actionCreators';
import { getUsers, follow, unfollow } from '../../../actionCreators/thunk';

import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.usersOnPage, this.props.currentPageUsers);
  }

  newSelectedPage = currentPage => {
    this.props.getUsers(this.props.usersOnPage, currentPage);
    this.props.setUsersPage(currentPage);
  };

  render() {
    return this.props.isUploaded ? (
      <Users {...this.props} newSelectedPage={this.newSelectedPage} />
    ) : (
      <Preloader />
    );
  }
}
const mapStateToProps = state => ({
  usersData: state.usersPage.usersData,
  usersOnPage: state.usersPage.usersOnPage,
  currentPageUsers: state.usersPage.currentPageUsers,
  totalAmountUsers: state.usersPage.totalAmountUsers,
  isUploaded: state.usersPage.isUploaded,
  isAnswerGone: state.usersPage.isAnswerGone,
});

const mapDispatchToProps = {
  setUsersPage,
  getUsers,
  follow,
  unfollow,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(UsersContainer);
