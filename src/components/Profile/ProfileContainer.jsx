import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { setUserData } from "../../redux/authReducer";
import { getProfile, getActiveUser } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    if (this.props.match.params.userId) {
      const userId = this.props.match.params.userId;

      getProfile(userId).then((data) => {
        this.props.setUserProfile(data);
      });
    } else {
      getActiveUser().then((data) => {
        if (data.resultCode === 0) {
          const { id, email, login } = data.data;
          this.props.setUserData(id, email, login);

          getProfile(id).then((data) => {
            if (this.props.isAuth) {
              this.props.setUserProfile(data);
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
