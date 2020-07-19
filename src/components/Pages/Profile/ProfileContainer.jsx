import { addPost, onChangePostTextarea, setUserProfile, getUserProfile } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import Profile from './Profile';
import React from 'react'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId);
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
        userProfile: state.profilePage.userProfile

    }
}

let withRedirect = withAuthRedirect(ProfileContainer)
export default connect(mapStateToProps, { onChangePostTextarea, addPost, setUserProfile, getUserProfile })(withRouter(withRedirect));
