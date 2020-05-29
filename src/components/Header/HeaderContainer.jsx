import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setUserData } from "../../redux/authReducer";
import { usersAPI } from "./../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.getActiveUser().then((data) => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        this.props.setUserData(id, email, login);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
