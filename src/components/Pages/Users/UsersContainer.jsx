import { getUsers, follow, unfollow, setUsersPage } from '../../../redux/users/actions';
import { connect } from 'react-redux';
import Users from './Users';
import React from 'react';
import Preloader from '../../common/Preloader';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.usersOnPage, this.props.currentPageUsers);
  }
  newSelectedPage = (currentPage) => {
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

export default compose(
  connect(mapStateToProps, { setUsersPage, getUsers, follow, unfollow }),
  withAuthRedirect
)(UsersContainer);
