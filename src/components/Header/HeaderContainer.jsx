import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setUserData, getUserData, logout } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setUserData, getUserData, logout })(
  HeaderContainer
);
