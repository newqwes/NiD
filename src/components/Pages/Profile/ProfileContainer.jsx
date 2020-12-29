import {
  addPost,
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  changePhoto,
  changeInfo,
} from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import Profile from './Profile';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { useEffect } from 'react';

const ProfileContainer = (props) => {
  const propUserId = props.match.params.userId;

  useEffect(() => {
    let userId = propUserId;

    if (!userId) {
      userId = props.authUserId;
    }

    props.getUserProfile(userId);
    props.getUserStatus(userId);
  }, [propUserId]);

  return <Profile {...props} isYourProfile={!propUserId} />;
};

const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    postTextarea: state.profilePage.postTextarea,
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    addPost,
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    changePhoto,
    changeInfo,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
