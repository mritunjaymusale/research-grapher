import React, { Component } from "react";
import { Graph as D3Graph } from "react-d3-graph";
import { Graph as GraphLib } from "@dagrejs/graphlib";

export class MyGraph extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

    render() {
    //   TODO: Refactor this to make it more dynamic and clean 
    var graph = new GraphLib();
    graph.setNode("Harry");
    graph.setNode("Sally");
    graph.setNode("Alice");
    graph.setEdge("Harry", "Sally");
    graph.setEdge("Harry", "Alice");
    var renamedGraphNodes = graph.nodes().map((node) => ({
      id: node,
    }));
    console.log(renamedGraphNodes);
    var renamedGraphEdges = graph.edges().map((edge) => ({
      source: edge.v,
      target: edge.w,
    }));
      
      
    // graph payload (with minimalist structure)
    const nodeData = {
      nodes: renamedGraphNodes,
      links: renamedGraphEdges,
    };

    // the graph configuration, just override the ones you need
    const myConfig = {
      nodeHighlightBehavior: true,
      node: {
        color: "lightgreen",
        size: 200,
        highlightStrokeColor: "blue",
        labelPosition: "top",
      },
      link: {
        highlightColor: "lightblue",
      },
    };

    const onClickNode = function (nodeId) {
      window.alert(`Clicked node ${nodeId}`);
    };

    const onClickLink = function (source, target) {
      window.alert(`Clicked link between ${source} and ${target}`);
    };

    return (
      <D3Graph
        id="graph-id" // id is mandatory
        data={nodeData}
        config={myConfig}
        onClickNode={onClickNode}
        onClickLink={onClickLink}
      />
    );
  }
}
