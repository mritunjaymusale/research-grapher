import React, { Component } from "react";
import { Button, Modal, NavItem } from "react-materialize";
import { ArxivIdContext } from "./Context";
import * as M from "materialize-css";
import { resetModals } from "../utils";

export class NavbarSearchButton extends Component {
  static contextType = ArxivIdContext;
  state = {
    value: "",
  };
  handleOnChange(event) {
    this.setState({ value: event.target.value });
  }

  _handleKeyDown(e) {
    if (e.key === "Enter") {
      if (this.state.value != "") {
        resetModals();

        this.context.updateArxivId(this.state.value);
      }
    }
  }
  render() {
    return (
      <NavItem>
        <Modal
          actions={[
            <Button flat modal="close" node="button" waves="green">
              Close
            </Button>,
          ]}
          trigger={
            <a>
              <i class="material-icons left">search</i>
            </a>
          }>
          <span>Enter the arXiv Id of the paper you are looking for</span>
          <input
            placeholder="Enter arXiv Id "
            onChange={(event) => {
              this.handleOnChange(event);
            }}
            onKeyDown={(e) => {
              this._handleKeyDown(e);
            }}
          />
        </Modal>
      </NavItem>
    );
  }
}
