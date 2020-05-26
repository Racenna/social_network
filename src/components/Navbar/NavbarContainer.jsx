import React from "react";
import Navbar from "./Navbar";

const NavbarContainer = (props) => {
  const state = props.store.getState();

  return <Navbar friends={state.sidebarData.friends} />;
};

export default NavbarContainer;
