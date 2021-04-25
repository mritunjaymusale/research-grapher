import React from "react";
import { Navbar } from "react-materialize";
import { NavbarSearchButton } from "./NavbarSearchButton";

export const NavBar = () => {
  return (
    <React.Fragment>
      <div className="navbar-fixed ">
        <Navbar
          className="black"
          alignLinks="right"
          brand={<span className="brand-logo">Research Grapher</span>}>
          <NavbarSearchButton />
        </Navbar>
      </div>
    </React.Fragment>
  );
};
