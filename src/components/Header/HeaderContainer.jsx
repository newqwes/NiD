import React from 'react'
import Header from './Header';
import { connect } from 'react-redux';
import {getOwnProfile} from '../../redux/auth'
import { compose } from 'redux';
class HeaderContainer extends React.Component {

    componentWillMount() {
        this.props.getOwnProfile()
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

export default compose(
    connect(mapStateToProps, { getOwnProfile })
    )(HeaderContainer);