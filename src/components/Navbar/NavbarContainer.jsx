import React from "react";
import Navbar from "./Navbar";
import StoreContext from "../../StoreContext";

const NavbarContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();

        return <Navbar friends={state.sidebarData.friends} />;
      }}
    </StoreContext.Consumer>
  );
};

export default NavbarContainer;
