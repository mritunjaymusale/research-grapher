import React, { Component } from "react";
import { Navbar } from "react-materialize";
import { ArxivIdContext } from "./Context";
import { NavbarSearchButton } from "./NavbarSearchButton";

export class NavBar extends Component {
  static contextType = ArxivIdContext;

  render() {
    return (
      <React.Fragment>
        <div className="navbar-fixed ">
          <Navbar
            className="black"
            alignLinks="right"
            brand={
              <span className="brand-logo">
                {this.context.isLoading
                  ? "Loading..."
                  : this.context.paperDetails.title}
              </span>
            }>
            <NavbarSearchButton />
          </Navbar>
        </div>
      </React.Fragment>
    );
  }
}
