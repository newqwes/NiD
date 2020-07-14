import { addPost, onChangePostTextarea } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import Profile from './Profile';

const mapStateToProps = state => {
    return {
        galaryPhotosData: state.profilePage.galaryPhotosData,
        postData: state.profilePage.postData,
        postTextarea: state.profilePage.postTextarea
    }
}

export default connect(mapStateToProps, {onChangePostTextarea, addPost})(Profile);
