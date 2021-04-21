import React, { useEffect, useState } from "react";
import { Navbar } from "react-materialize";
import { useSelector } from "react-redux";

import { NavbarSearchButton } from "./NavbarSearchButton";

export const NavBar = () => {
  const [paperTitle, setPaperTitle] = useState("Enter paper id to begin ");
  var paper = useSelector((state) => state.arxivReducer.paper);
  useEffect(() => (paper ? setPaperTitle(paper.title) : null));
  return (
    <React.Fragment>
      <div className="navbar-fixed ">
        <Navbar
          className="black"
          alignLinks="right"
          brand={<span className="brand-logo">{paperTitle}</span>}>
          <NavbarSearchButton />
        </Navbar>
      </div>
    </React.Fragment>
  );
};
