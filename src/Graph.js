import React, { Component } from "react";
import { ArxivIdContext } from "./Components/Context";
import { Graph as D3Graph } from "react-d3-graph";
import { D3GraphProcessor, JSONGraphProcessor } from "./GraphProcessor";
import { Col, Row } from "react-materialize";
import * as M from "materialize-css";
import { CustomModal } from "./Components/CustomModal";
import { DirectedGraph } from "graphology";

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
      "Double clicked node ${nodeId} in position (${node.x}, ${node.y})"
    );
  };
  render() {
    if (!this.context.isLoading) {
      var json = this.context.paperDetails;
      var graph = new DirectedGraph();
      graph = JSONGraphProcessor.convertJSONToGraph(json, graph);
      graph = D3GraphProcessor.convertToD3Graph(graph);

      const { attributes, options, ...data } = graph;
      return (
        <Row>
          <Col s={6} l={6}>
            <D3Graph
              id="graph-id2" // id is mandatory
              data={data}
              config={myConfig}
              onClickNode={(nodeId, node) => {
                this.onClickNode(nodeId, node);
              }}
              onDoubleClickNode={(nodeId, node) => {
                this.onDoubleClickNode(nodeId, node);
              }}
            />
          </Col>
          {this.state.modal}
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
