import {
  setPost,
  loadUserProfile,
  loadUserStatus,
  updateUserStatus,
  updatePhoto,
  updateInfo,
} from '../../../redux/actions';
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

    props.loadUserProfile(userId);
    props.loadUserStatus(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    setPost,
    loadUserProfile,
    loadUserStatus,
    updateUserStatus,
    updatePhoto,
    updateInfo,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
