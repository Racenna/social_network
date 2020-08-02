// import React from "react";
import Navbar from './Navbar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    sidebarData: state.sidebarData,
  };
};

export default connect(mapStateToProps, {})(Navbar);
