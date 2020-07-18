import React from 'react'
import Header from './Header';
import { takeOwnAuth } from '../../redux/auth';
import { connect } from 'react-redux';
import { userAPI } from '../../api/api';
class HeaderContainer extends React.Component {

    componentWillMount() {
        userAPI.getOwnProfile()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data
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