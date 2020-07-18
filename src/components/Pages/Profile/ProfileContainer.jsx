import { addPost, onChangePostTextarea, setUserProfile } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import Profile from './Profile';
import React from 'react'
import { withRouter } from 'react-router-dom';
import { userAPI } from '../../../api/api';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userUrlId = this.props.match.params.userId;
        if (!userUrlId) {
            userUrlId = 5632
        }
        userAPI.getUserProfile(userUrlId).then(data => {
            this.props.setUserProfile(data)
        })
    }
    componentWillUnmount() {
        this.props.setUserProfile(null)
    }

    render() {
        return <Profile {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        postData: state.profilePage.postData,
        postTextarea: state.profilePage.postTextarea,
        userProfile: state.profilePage.userProfile,

    }
}

export default connect(mapStateToProps, { onChangePostTextarea, addPost, setUserProfile })(withRouter(ProfileContainer));
