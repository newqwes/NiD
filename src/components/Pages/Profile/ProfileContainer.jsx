import React from 'react'
import { addPostAC, onChangePostTextareaAC } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import Profile from './Profile';

const mapStateToProps = state => {
    return {
        galaryPhotosData: state.profilePage.galaryPhotosData,
        postData: state.profilePage.postData,
        postTextarea: state.profilePage.postTextarea
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onChangePostTextarea: value => dispatch(onChangePostTextareaAC(value)),
        addPost: () => dispatch(addPostAC())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
