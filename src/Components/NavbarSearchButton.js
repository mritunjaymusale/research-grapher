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
        // Check if the input is arXiv id or not
        var arxivIdRegex = new RegExp("^[0-9]{4}.[0-9]{5}$");
        if (arxivIdRegex.test(this.state.value)) {
          this.closeModal();
          this.context.updateArxivId(this.state.value);
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
  componentDidMount() {
    this.setState({
      modalElement: document.getElementById("searchbuttonmodal"),
      textInput: document.getElementById("text-input"),
    });
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
          }
        >
          {this.getUserInputForArxivId()}
        </Modal>
        {this.openModalFirstTimePrompt()}
      </NavItem>
    );
  }
  openModalFirstTimePrompt() {
    return this.state.modalElement &&
      this.context.id === "" &&
      this.context.isLoading
      ? this.openModal()
      : null;
  }

  openModal() {
    M.Modal.getInstance(this.state.modalElement).open();
    this.state.textInput.focus();
  }
  closeModal() {
    M.Modal.getInstance(this.state.modalElement).close();
  }
}
