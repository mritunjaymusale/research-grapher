import { Graph as D3Graph } from "react-d3-graph";
import React, { Component } from "react";
import { D3GraphProcessor } from "./Components/GraphProcessor";
import { store } from "./store";

export default class GraphRenderer extends Component {
  state = { graph: null };
  componentDidMount() {
    var store_state = store.getState();
    var graph = D3GraphProcessor.convertToD3Graph(store_state.graph);
    this.setState({ graph: graph });
  }
  render() {
    if (this.state.graph) {
      const { attributes, options, ...data } = this.state.graph;
      return (
        <div>
          <D3Graph
            id="graph-id" // id is mandatory
            data={data}
            config={myConfig}
            onClickNode={(nodeId, node) => {
              this.props.onClickNode(nodeId, node);
            }}
            onDoubleClickNode={(nodeId, node) => {
              this.props.onDoubleClickNode(nodeId, node);
            }}
          />
        </div>
      );
    } else return <div></div>;
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
