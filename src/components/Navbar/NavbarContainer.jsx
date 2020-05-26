// import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";

// const NavbarContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const state = store.getState();

//         return <Navbar friends={state.sidebarData.friends} />;
//       }}
//     </StoreContext.Consumer>
//   );
// };
const mapStateToProps = (state) => {
  return {
    sidebarData: state.sidebarData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
