import { addPost, onChangePostTextarea, setUserProfile } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import Profile from './Profile';
import React from 'react'
import axios from 'axios';

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(respons => {
            this.props.setUserProfile(respons.data)
        })
    }
    
    render() {
        return <Profile {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        galaryPhotosData: state.profilePage.galaryPhotosData,
        postData: state.profilePage.postData,
        postTextarea: state.profilePage.postTextarea,
        userProfile: state.profilePage.userProfile,
        
    }
}

export default connect(mapStateToProps, {onChangePostTextarea, addPost, setUserProfile})(ProfileContainer);
