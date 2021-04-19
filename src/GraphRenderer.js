
import SpriteText from "three-spritetext";
import React, { useEffect, useRef } from "react";
import { D3GraphProcessor } from "./Components/GraphProcessor";
import { ForceGraph3D } from "react-force-graph";

import { useSelector } from "react-redux";



export const GraphRenderer = (props) => {
  const graphInstance = useSelector((state) => state.graphReducer.graph);
  var graph = D3GraphProcessor.convertToD3Graph(graphInstance);
  const { attributes, options, ...data } = graph;

  const fgRef = useRef();

  useEffect(() => {
    const fg = fgRef.current;

    fg.d3Force("link").distance((link) => 500);
    // fg.d3Force("gravity", -250)
  }, []);

  return (
    <div>
      <ForceGraph3D

        ref={fgRef}
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
          props.onClickNode(node);
        }}
      />
    </div>
  );
};

function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
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
