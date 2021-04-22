import SpriteText from "three-spritetext";
import React, { useEffect, useRef } from "react";
import { D3GraphProcessor } from "./GraphDataProcessor";
import { ForceGraph3D } from "react-force-graph";
import { useSelector } from "react-redux";
import watch from "redux-watch";
import { store } from "../../store";

export const GraphRenderer = (props) => {
  const graphInstance = useSelector((state) => state.graphReducer.graph);
  var graph = D3GraphProcessor.convertToD3Graph(graphInstance);
  const { attributes, options, ...data } = graph;

  const fgRef = useRef();

  let paper_watcher = watch(store.getState, "arxivReducer.paper");
  store.subscribe(
    paper_watcher((newVal, oldVal, objectPath) => {
      if (newVal !== oldVal) {
       
      //  TODO: find a way to force rerender the component
      }
    })
  );

  useEffect(() => {
    const fg = fgRef.current;

    fg.d3Force("link").distance((link) => 500);
  }, []);

  return (
    <ForceGraph3D
      width={window.innerWidth / 2.2}
      height={window.innerHeight / 2}
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
      backgroundColor="#101020"
      linkColor={() => "rgba(255,255,255,0.2)"}
      nodeRelSize={1}
    />
  );
};

function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
}
