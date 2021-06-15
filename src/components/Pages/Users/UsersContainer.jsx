import { connect } from 'react-redux';
import React from 'react';
import { compose } from 'redux';

import { setUsersPage } from '../../../actionCreators';
import { getUsers, follow, unfollow } from '../../../actionCreators/thunk';
import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.usersOnPage, this.props.currentPageUsers);
  }
  newSelectedPage = currentPage => {
    this.props.getUsers(this.props.usersOnPage, currentPage);
    this.props.setUsersPage(currentPage);
  };

  render() {
    return (
      <>
        {this.props.isUploaded ? (
          <Users {...this.props} newSelectedPage={this.newSelectedPage} />
        ) : (
          <Preloader />
        )}
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    usersData: state.usersPage.usersData,
    usersOnPage: state.usersPage.usersOnPage,
    currentPageUsers: state.usersPage.currentPageUsers,
    totalAmountUsers: state.usersPage.totalAmountUsers,
    isUploaded: state.usersPage.isUploaded,
    isAnswerGone: state.usersPage.isAnswerGone,
  };
};

export default compose(
  connect(mapStateToProps, { setUsersPage, getUsers, follow, unfollow }),
  withAuthRedirect,
)(UsersContainer);
