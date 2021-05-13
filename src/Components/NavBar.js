import React, { Component } from "react";
import { Navbar } from "react-materialize";
import { Button, Icon, Modal, NavItem } from "react-materialize";
import { UserInput } from "./UserInput";



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





export class NavbarSearchButton extends Component {
  render() {
    return (
      <NavItem>
        <Modal
          id="searchbuttonmodal"
          actions={[
            <Button flat modal="close" node="button" waves="green">
              Close
            </Button>,
          ]}
          trigger={


            <Icon class="material-icons-outlined">
              note_add
              </Icon>


          }>
          <UserInput />
        </Modal>
      </NavItem>
    );
  }
}
