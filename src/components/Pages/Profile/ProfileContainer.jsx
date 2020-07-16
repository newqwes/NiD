import { addPost, onChangePostTextarea, setUserProfile } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import Profile from './Profile';
import React from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userUrlId = this.props.match.params.userId;
        if(!userUrlId) {
            userUrlId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userUrlId).then(respons => {
            this.props.setUserProfile(respons.data)
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

export default connect(mapStateToProps, {onChangePostTextarea, addPost, setUserProfile})(withRouter(ProfileContainer));
