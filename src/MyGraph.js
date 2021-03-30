import React, { Component } from "react";
import { Graph as D3Graph } from "react-d3-graph";
import { Graph as GraphLib } from "@dagrejs/graphlib";

export class MyGraph extends Component {
  constructor(props) {
    super(props);
    this.graphUIConfig = {
      nodeHighlightBehavior: true,
      cluster: true,
      node: {
        color: "lightgreen",
        size: 200,
        highlightStrokeColor: "blue",
        labelPosition: "top",
        strokeColor: "blue",
      },
      link: {
        highlightColor: "lightblue",
      },
      gravity: -100,
      directed: true,
    };
    this.state = {
      data: null,
    };
    this.graph = new GraphLib();
  }
  componentDidMount() {
    // TODO: make this URL more Dynamic
    fetch(
      "https://api.semanticscholar.org/v1/paper/arXiv:2103.03230?include_unknown_references=true"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            apiDataForDebug: result,
          });
          this.graph.setNode(result.title);
          result.references.map((ref) => {
            this.graph.setEdge(result.title, ref.title);
          });
        },
        // fetch error
        (error) => {}
      )
      .then(() => this.forceUpdate());
  }
  updateGraph() {
    this.graph.setNode(this.state.data.title);
  }

  render() {
    //   TODO: Refactor this to make it more dynamic and clean

    var {
      renamedGraphNodes,
      renamedGraphEdges,
    } = this.convertGraphToD3Compatible(this.graph);

    // graph payload (with minimalist structure)
    const nodeData = {
      nodes: renamedGraphNodes,
      links: renamedGraphEdges,
    };

    return (
      <D3Graph
        id="graph-id" // id is mandatory
        data={nodeData}
        config={this.graphUIConfig}
      />
    );
  }

  convertGraphToD3Compatible(graph) {
    var renamedGraphNodes = graph.nodes().map((node) => ({
      id: node,
    }));
    var renamedGraphEdges = graph.edges().map((edge) => ({
      source: edge.v,
      target: edge.w,
    }));
    return { renamedGraphNodes, renamedGraphEdges };
  }
}
