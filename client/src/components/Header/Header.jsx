import React from "react";
import "./Header.css";
// import Welcome from "../Features/Welcome";
export const Header = () => {
  return (
    <div className="header-container">
      <div className="header"> local awesome dads.</div>
      <p className="sub-header">
        The first social activity planner for real dads
      </p>
      {/* <Welcome /> */}
    </div>
  );
};

export default Header;
