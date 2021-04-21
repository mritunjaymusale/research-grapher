import React, { Component } from "react";
import { Button, Icon, Modal, NavItem } from "react-materialize";
import * as M from "materialize-css";
import { store } from "../store";

export class NavbarSearchButton extends Component {
  state = {
    value: "",
  };
  handleOnChange(event) {
    this.setState({ value: event.target.value });
  }

  _handleKeyDown(e) {
    if (e.key === "Enter") {
      if (this.state.value !== "") {
        // Check if the input is arXiv id or not
        var arxivIdRegex = new RegExp("^[0-9]{4}.[0-9]{5}$");
        if (arxivIdRegex.test(this.state.value)) {
          this.closeModal();

          store.dispatch({
            type: "UPDATE_ARXIV_ID",
            newId: this.state.value,
          });
        } else M.toast({ html: "Given Id is not an arXivId" });
      }
    }
  }
  getUserInputForArxivId = (params) => {
    return (
      <React.Fragment>
        <span>Enter the arXiv Id of the paper you are looking for</span>
        <input
          placeholder="Enter arXiv Id "
          onChange={(event) => {
            this.handleOnChange(event);
          }}
          onKeyDown={(e) => {
            this._handleKeyDown(e);
          }}
          autoFocus={true}
          id="text-input"
        />
      </React.Fragment>
    );
  };
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
          {this.getUserInputForArxivId()}
        </Modal>
      </NavItem>
    );
  }

  closeModal() {
    M.Modal.getInstance(document.getElementById("searchbuttonmodal")).close();
  }
}
