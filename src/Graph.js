import React, { Component } from "react";
import { ArxivIdContext, GraphDataProvider } from "./Components/Context";
import * as M from "materialize-css";
import { CustomModal } from "./Components/CustomModal";
import { Col, Row } from "react-materialize";
import GraphRenderer from "./GraphRenderer";

export class Graph extends Component {
  static contextType = ArxivIdContext;

  state = { modal: null, graph: null };
  onClickNode(nodeId, node) {
    var modalOptions = {
      bottomSheet: true,
      id: "graphpapermodal",
    };
    this.setState({
      modal: <CustomModal modalOptions={modalOptions} node={node.attributes} />,
    });

    M.Modal.getInstance(document.getElementById("graphpapermodal")).open();
  }
  onDoubleClickNode = function (nodeId, node) {
    window.alert(
      `Double clicked node ${nodeId} in position (${node.x}, ${node.y})`
    );
  };
  render() {
    if (!this.context.isLoading) {
      var json = this.context.paperDetails;

      return (
        <Row>
          <Col s={6} l={6}>
            <GraphDataProvider>
              <GraphRenderer
                json={json}
                onClickNode={(nodeId, node) => {
                  this.onClickNode(nodeId, node);
                }}
                onDoubleClickNode={(nodeId, node) => {
                  this.onDoubleClickNode(nodeId, node);
                }}
              />
            </GraphDataProvider>
          </Col>
          {this.state.modal}
        </Row>
      );
    } else {
      return <div></div>;
    }
  }
}
