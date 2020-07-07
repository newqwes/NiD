import React from 'react'
import { addPostAC, onChangePostTextareaAC } from '../../../../redux/profile-reducer';
import Post from './Post';

const PostContainer = (props) => {

    let postData = props.store.getState().profilePage.postData;
    let postTextarea = props.store.getState().profilePage.postTextarea;

    let onChangePostTextarea = value => props.store.dispatch(onChangePostTextareaAC(value));
    let addPost = () => props.store.dispatch(addPostAC());

    return <Post postData={postData} addPost={addPost} postTextarea={postTextarea} onChangePostTextarea={onChangePostTextarea} />
}

export default PostContainer;