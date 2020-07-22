import { addPost, onChangePostTextarea, getUserProfile } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import Profile from './Profile';
import React from 'react'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId);
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
        userStatus: state.profilePage.userStatus

    }
}

export default compose(
    connect(mapStateToProps, { onChangePostTextarea, addPost, getUserProfile }),
    withRouter,
    withAuthRedirect)(ProfileContainer)
