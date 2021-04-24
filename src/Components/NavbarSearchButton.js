import React, { Component } from "react";
import { Button, Icon, Modal, NavItem } from "react-materialize";
import { UserInput } from "./UserInput";

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
            <Icon>
              <i class="material-icons left">search</i>
            </Icon>
          }>
          <UserInput />
        </Modal>
      </NavItem>
    );
  }
}
