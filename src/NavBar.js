import React, { Suspense } from "react";
import { ProgressBar } from "react-materialize";
import * as M from "materialize-css";
const Navbar = React.lazy(() => import("react-materialize/lib/Navbar"));
export const NavBar = () => {
  return (
    <Suspense fallback={<ProgressBar />}>
      <Navbar
        brand={
          <a href="" className="center">
            Research Grapher
          </a>
        }
        className="black"></Navbar>
    </Suspense>
  );
};

export default NavBar;
