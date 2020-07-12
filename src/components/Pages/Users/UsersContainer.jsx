import { subscribeAC, unsubscribeAC, setUsersAC } from '../../../redux/users-reducer';
import { connect } from 'react-redux'
import Users from './Users'

const mapStateToProps = state => {
    return {
        usersData: state.usersPage.usersData
    }
}
const mapDispatchToProps = dispatch => {
    return {
        subscribe: (id) => dispatch(subscribeAC(id)),
        unsubscribe: (id) => dispatch(unsubscribeAC(id)),
        setUsers: (users) => dispatch(setUsersAC(users))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)

