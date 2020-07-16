import React from 'react'
import Header from './Header';
import { takeOwnAuth } from '../../redux/auth';
import Axios from 'axios';
import { connect } from 'react-redux';
class HeaderContainer extends React.Component {

    componentWillMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(respons => {
            if(respons.data.resultCode === 0) {
                let {id, email, login} = respons.data.data
                this.props.takeOwnAuth(id, email, login)
            }
        })
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { takeOwnAuth })(HeaderContainer);