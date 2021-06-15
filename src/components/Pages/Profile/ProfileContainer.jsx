import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Profile from './Profile';
import { addPost } from '../../../actionCreators';
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  changePhoto,
  changeInfo,
} from '../../../actionCreators/thunk';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

const ProfileContainer = props => {
  useEffect(() => {
    let userId = props.match.params.userId;

    if (!userId) {
      userId = props.authUserId;
    }

    props.getUserProfile(userId);
    props.getUserStatus(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.userId]);
  return (
    <Profile
      {...props}
      updateUserStatus={props.updateUserStatus}
      status={props.status}
      isYourProfile={!props.match.params.userId}
      changePhoto={props.changePhoto}
      changeInfo={props.changeInfo}
    />
  );
};

const mapStateToProps = state => {
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
  withAuthRedirect,
)(ProfileContainer);
