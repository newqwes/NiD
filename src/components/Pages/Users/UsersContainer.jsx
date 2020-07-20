import { getUsers, follow, unfollow, setUsersPage } from '../../../redux/users-reducer';
import { connect } from 'react-redux'
import Users from './Users'
import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.usersOnPage, this.props.currentPageUsers);
    }
    newSelectedPage = (currentPage) => {
        this.props.getUsers(this.props.usersOnPage, currentPage);
        this.props.setUsersPage(currentPage);
    }

    render() {
        let buttonsUsersPage = this.props.totalAmountUsers / this.props.usersOnPage;
        let pages = [];
        for (let i = 1; i <= buttonsUsersPage; i++) {
            if (pages.length < 21) {
                pages.push(i)
            }
        }
        return <>
            {this.props.isUploaded
                ? <Users {...this.props}
                     pages={pages}
                    newSelectedPage={this.newSelectedPage}
                />
                : <Preloader />}

        </>
    }
};
const mapStateToProps = state => {
    return {
        usersData: state.usersPage.usersData,
        usersOnPage: state.usersPage.usersOnPage,
        currentPageUsers: state.usersPage.currentPageUsers,
        totalAmountUsers: state.usersPage.totalAmountUsers,
        isUploaded: state.usersPage.isUploaded,
        isAnswerGone: state.usersPage.isAnswerGone
    }
};

export default compose(
    connect(mapStateToProps, { setUsersPage, getUsers, follow, unfollow }),
    withAuthRedirect
)(UsersContainer);
