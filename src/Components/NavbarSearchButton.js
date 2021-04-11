import React, { Component } from "react";
import { Button, Icon, Modal, NavItem } from "react-materialize";
import { ArxivIdContext } from "./Context";
import * as M from "materialize-css";

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
      if (this.state.value !== "") {
        var elems = document.getElementById("searchbuttonmodal");

        var instance = M.Modal.getInstance(elems);

        instance.close();

        this.context.updateArxivId(this.state.value);
      }
    }
  }
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
