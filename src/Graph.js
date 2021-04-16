import React, { Component } from "react";
import { ArxivIdContext } from "./Components/Context";
import { Graph as D3Graph } from "react-d3-graph";
import { GraphProcessor } from "./GraphProcessor";
import { Card, Col, Container, Modal, Row } from "react-materialize";
import * as M from "materialize-css";

export class Graph extends Component {
  static contextType = ArxivIdContext;
  state = {
    selectedPaper: { paperTitle: "", abstract: "" },
  };
  componentDidMount() {
    // TODO: mount this to graph nodes instead of context
    this.setState({
      selectedPaper: this.context.paperDetails,
    });
  }
  render() {
    if (!this.context.isLoading) {
      var json = this.context.paperDetails;

      var graph = GraphProcessor.processGraph(json);
      const onClickNode = function (nodeId, node) {
        M.Modal.getInstance(document.getElementById("graphpapermodal")).open();
      };
      const onDoubleClickNode = function (nodeId, node) {
        window.alert(
          "Double clicked node ${nodeId} in position (${node.x}, ${node.y})"
        );
      };

      const { attributes, options, ...data } = graph;
      return (
        <Row>
          <Col s={6} l={6}>
            <D3Graph
              id="graph-id2" // id is mandatory
              data={data}
              config={myConfig}
              onClickNode={onClickNode}
              onDoubleClickNode={onDoubleClickNode}
            />
          </Col>
          {/* TODO: Root tag in modal options can be used to directly mount it to divs use that with on click of graph  */}
          <Modal id="graphpapermodal"></Modal>
        </Row>
      );
    } else {
      return <div></div>;
    }
  }
}

const myConfig = {
  staticGraph: false,
  linkHighlightBehavior: true,
  nodeHighlightBehavior: true,
  highlightDegree: 1,
  highlightOpacity: 0.2,
  directed: true,
  focusAnimationDuration: 0,
  // Todo: this has to be mounted to paper that recently loaded it's content from api
  focusedNodeId: "nodeIdToTriggerZoomAnimation",
  d3: {
    linkLength: 350,
    gravity: -250,
    linkStrength: 1,
  },
  node: {
    color: "lightgreen",
    highlightColor: "SAME",
    highlightFontSize: 12,
    highlightFontWeight: "bold",
    highlightStrokeColor: "SAME",
    highlightStrokeWidth: 1.5,
  },
  link: {
    highlightColor: "blue",
    highlightFontSize: 15,
    highlightFontWeight: "bold",
    renderLabel: true,
    semanticStrokeWidth: true,
  },
};
