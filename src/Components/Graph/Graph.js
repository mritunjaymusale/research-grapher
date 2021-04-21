import React, { Component } from "react";
import * as M from "materialize-css";
import { CustomModal } from "../CustomModal";
import { Card, CardPanel, Row } from "react-materialize";
import { GraphRenderer } from "./GraphRenderer";
import watch from "redux-watch";
import { store } from "../../store";

export class Graph extends Component {
  state = { modal: null };
  constructor(props) {
    super(props);
    let paper_watcher = watch(store.getState, "arxivReducer.paper");
    store.subscribe(
      paper_watcher((newVal, oldVal, objectPath) => {
        if (newVal !== oldVal) {
          // this.setState({ paper: newVal });
          this.forceUpdate();
        }
      })
    );
  }

  onClickNode(node) {
    var modalOptions = {
      bottomSheet: true,
      id: "graphpapermodal",
    };
    this.setState({
      modal: <CustomModal modalOptions={modalOptions} node={node.attributes} />,
    });
    setTimeout(() => {
      M.Modal.getInstance(document.getElementById("graphpapermodal")).open();
    }, 70);
  }

  render() {
    return (
      <React.Fragment>
        <Card title="Citation Graph">
          <GraphRenderer
            onClickNode={(node) => {
              this.onClickNode(node);
            }}
          />
        </Card>

        {this.state.modal}
      </React.Fragment>
    );
  }
}
