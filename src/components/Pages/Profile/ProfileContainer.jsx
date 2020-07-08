import React from 'react'
import s from './Profile.module.scss'
import PostContainer from './Post/PostContainer';
import { addPostAC, onChangePostTextareaAC } from '../../../../redux/profile-reducer';
import Post from './Post';
import { connect } from 'react-redux';

const Profile = (props) => {
    let galaryPhotosData = props.store.getState().profilePage.galaryPhotosData;
    let galaryPhotosDataElements = galaryPhotosData.map(n => <img className={s.imgCatalog} src={n.urlGalaryPhoto} alt="" />)
    return (
        <section className={s.section}>
            <div className={s.wrapper}>
                <div className={s.row}>
                    <div className={s.level}>Назар Аширов</div>
                    <div className={s.catalog}>
                        {galaryPhotosDataElements}
                    </div>
                    <div className={s.post}>
                        <PostContainer store={props.store}/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Profile;



const PostContainer = (props) => {

    let postData = props.store.getState().profilePage.postData;
    let postTextarea = props.store.getState().profilePage.postTextarea;

    let onChangePostTextarea = value => props.store.dispatch(onChangePostTextareaAC(value));
    let addPost = () => props.store.dispatch(addPostAC());

    return <Post postData={postData} addPost={addPost} postTextarea={postTextarea} onChangePostTextarea={onChangePostTextarea} />
}

const mapStateToProps = (state) => {
    return {
        galaryPhotosData: state.profilePage.galaryPhotosData,
        postData: state.profilePage.postData,
        postTextarea: state.profilePage.postTextarea
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);