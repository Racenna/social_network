import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { setUserData } from "../../redux/authReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    if (this.props.match.params.userId) {
      const userId = this.props.match.params.userId;
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then((response) => {
          this.props.setUserProfile(response.data);
        });
    } else {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
          withCredentials: true,
        })
        .then((response) => {
          if (response.data.resultCode === 0) {
            const { id, email, login } = response.data.data;
            this.props.setUserData(id, email, login);

            axios
              .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
              .then((response) => {
                if (this.props.isAuth) {
                  this.props.setUserProfile(response.data);
                } else {
                  this.props.setUserProfile({});
                }
              });
          }
        });
    }
  }

  render() {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profileData.profile,
  isAuth: state.auth.isAuth,
});

const withRouterContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, setUserData })(
  withRouterContainerComponent
);
