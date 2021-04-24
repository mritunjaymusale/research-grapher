import SpriteText from "three-spritetext";
import React, { Component } from "react";
import { D3GraphProcessor } from "./GraphDataProcessor";
import { ForceGraph3D } from "react-force-graph";
import { store } from "../../store";
import watch from "redux-watch";

function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
}

export class GraphRenderer extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      graph: store.getState().graphReducer.graph,
    };
    this.storeListener();
  }
  storeListener() {
    let w = watch(store.getState, "graphReducer.isUpdating");
    store.subscribe(
      w((newVal, oldVal, objectPath) => {
        if (newVal === false) {
          this.setState({
            graph: store.getState().graphReducer.graph,
          });
        }
      })
    );
  }

  componentDidMount() {
    const fg = this.myRef.current;
    fg.d3Force("link").distance((link) => 500);
  }
  render() {
    var graph = this.state.graph;
    graph = D3GraphProcessor.convertToD3Graph(graph);
    const { attributes, options, ...data } = graph;

    return (
      <ForceGraph3D
        width={window.innerWidth / 2.2}
        height={window.innerHeight / 2}
        ref={this.myRef}
        graphData={data}
        nodeAutoColorBy="group"
        nodeThreeObject={(node) => {
          var truncated_id = truncate(node.id, 25);
          const sprite = new SpriteText(truncated_id);
          sprite.color = node.color;
          sprite.textHeight = 18;
          return sprite;
        }}
        onNodeClick={(node, event) => {
          store.dispatch({
            type: "UPDATE_CURRENTLY_SELECTED_NODE",
            node: node,
          });
        }}
        backgroundColor="#101020"
        linkColor={() => "rgba(255,255,255,0.2)"}
        nodeRelSize={1}
      />
    );
  }
}
