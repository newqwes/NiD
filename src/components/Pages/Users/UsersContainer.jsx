import { subscribe, unsubscribe, setUsers, setAmountUsers, setUsersPage, isUploadedDis, isAnsverGoneAC } from '../../../redux/users-reducer';
import { connect } from 'react-redux'
import Users from './Users'
import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import { userAPI } from '../../../api/api';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.isUploadedDis(false);
        userAPI.getUsers(this.props.usersOnPage, this.props.currentPageUsers)
        .then(data => {
            this.props.setUsers(data.items);
            this.props.setAmountUsers(data.totalCount);
            this.props.isUploadedDis(true);
        })
    }
    newSelectedPage = (currentPage) => {
        this.props.setUsersPage(currentPage);
        this.props.isUploadedDis(false);
        userAPI.getUsers(this.props.usersOnPage, currentPage)
        .then(data => {
            this.props.setUsers(data.items);
            this.props.isUploadedDis(true);
        })
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
}
const mapStateToProps = state => {
    return {
        usersData: state.usersPage.usersData,
        usersOnPage: state.usersPage.usersOnPage,
        currentPageUsers: state.usersPage.currentPageUsers,
        totalAmountUsers: state.usersPage.totalAmountUsers,
        isUploaded: state.usersPage.isUploaded,
        isAnswerGone: state.usersPage.isAnswerGone
    }
}
export default connect(mapStateToProps, { subscribe, unsubscribe, setUsers, isUploadedDis, setAmountUsers, setUsersPage, isAnsverGoneAC })(UsersContainer)
