import { subscribeAC, unsubscribeAC, setUsersAC, totalAmountUsersAC, setUsersPageAC } from '../../../redux/users-reducer';
import { connect } from 'react-redux'
import Users from './Users'
import React from 'react';
import * as axios from 'axios';

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPage}&page=${this.props.currentPageUsers}`).then(respons => {
            this.props.setUsers(respons.data.items)
            this.props.setAmountUsers(respons.data.totalCount)
        })
    }
    newSelectedPage = (currentPage)=> {
        this.props.setUsersPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPage}&page=${currentPage}`).then(respons => {
            this.props.setUsers(respons.data.items)
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
        return <Users 
        usersData={this.props.usersData}
        unsubscribe={this.props.unsubscribe}
        subscribe={this.props.subscribe}
        pages={pages}
        currentPageUsers={this.props.currentPageUsers}
        newSelectedPage={this.newSelectedPage}
        />
    }
}
const mapStateToProps = state => {
    return {
        usersData: state.usersPage.usersData,
        usersOnPage: state.usersPage.usersOnPage,
        currentPageUsers: state.usersPage.currentPageUsers,
        totalAmountUsers: state.usersPage.totalAmountUsers
    }
}
const mapDispatchToProps = dispatch => {
    return {
        subscribe: id => dispatch(subscribeAC(id)),
        unsubscribe: id => dispatch(unsubscribeAC(id)),
        setUsers: users => dispatch(setUsersAC(users)),
        setAmountUsers: count => dispatch(totalAmountUsersAC(count)),
        setUsersPage: pageNumber => dispatch(setUsersPageAC(pageNumber))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
