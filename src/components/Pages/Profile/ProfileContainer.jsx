import {
  addPost,
  getUserProfile,
  getUserStatus,
  updateUserStatus,
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";
import Profile from "./Profile";
import React from "react";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import { useEffect } from "react";

const ProfileContainer = (props) => {
  useEffect(() => {
    let userId = props.match.params.userId; // props.match.params.userId получили при помощи withRouter
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
    />
  );
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
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
