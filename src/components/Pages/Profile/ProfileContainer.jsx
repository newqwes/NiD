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

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId; // this.props.match.params.userId получили при помощи withRouter
    if (!userId) {
      userId = 5632;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        updateUserStatus={this.props.updateUserStatus}
        status={this.props.status}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    postTextarea: state.profilePage.postTextarea,
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
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
