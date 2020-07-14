import { subscribe, unsubscribe, setUsers, setAmountUsers, setUsersPage, isUploadedDis } from '../../../redux/users-reducer';
import { connect } from 'react-redux'
import Users from './Users'
import React from 'react';
import * as axios from 'axios';
import Preloader from '../../common/Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.isUploadedDis(false)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPage}&page=${this.props.currentPageUsers}`).then(respons => {
            this.props.setUsers(respons.data.items)
            this.props.setAmountUsers(respons.data.totalCount)
            this.props.isUploadedDis(true) 
        })
    }
    newSelectedPage = (currentPage) => {
        this.props.setUsersPage(currentPage)
        this.props.isUploadedDis(false)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPage}&page=${currentPage}`).then(respons => {
            this.props.setUsers(respons.data.items)
            this.props.isUploadedDis(true)
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
                ? <Users
                    usersData={this.props.usersData}
                    unsubscribe={this.props.unsubscribe}
                    subscribe={this.props.subscribe}
                    pages={pages}
                    currentPageUsers={this.props.currentPageUsers}
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
        isUploaded: state.usersPage.isUploaded
    }
}
export default connect(mapStateToProps, {subscribe, unsubscribe, setUsers, isUploadedDis, setAmountUsers, setUsersPage})(UsersContainer)
