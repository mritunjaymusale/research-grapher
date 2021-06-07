import React, { Suspense, useEffect, useRef, useState } from "react";
import { Col, ProgressBar, Row } from "react-materialize";
import { ForceGraph3D } from "react-force-graph";
import circle_node from "./circle_node.svg";
import cone_node from "./cone_node.svg";
import {
  attachLabelsToEdges,
  beautifyNodes,
  convertToD3Graph,
} from "./GraphOperations";
import store from "../store/store";
import { changeSelectedNode } from "../store/GraphSlice";
import { useSelector } from "react-redux";
import { DirectedGraph } from "graphology";
import {
  addUnrealBloomPass,
  generateBrightLinks,
  makeCustomNodes,
} from "./ThreeJsEffects";

const Card = React.lazy(() => import("react-materialize/lib/Card"));

const CitationGraph = () => {
  const redux_graph_object = useSelector((state) => state.graph);
  const [graph, setGraph] = useState(graphToD3Conversion(new DirectedGraph()));
  disableDefaultArrowKeysBehaviour();
  useEffect(() => {
    if (redux_graph_object.graph.toJSON().nodes.length !== graph.nodes.length) {
      setGraph(graphToD3Conversion(redux_graph_object.graph));
    }
  }, [redux_graph_object, graph]);
  return (
    <Suspense fallback={<ProgressBar />}>
      <Card title="Citation Graph" actions={Legends}>
        <ForceGraph3D
          controlType="fly"
          width={window.innerWidth / 2.2}
          height={window.innerHeight / 2}
          ref={addUnrealBloomPass}
          graphData={graph}
          nodeThreeObject={makeCustomNodes}
          onNodeClick={handleSelectedNode}
          backgroundColor="#101020"
          linkThreeObject={generateBrightLinks}
          cooldownTime={Infinity}
        />
      </Card>
    </Suspense>
  );
};

export default CitationGraph;

const handleSelectedNode = (node, event) => {
  store.dispatch(changeSelectedNode({ node: node.attributes }));
};

function graphToD3Conversion(graph) {
  var data = convertToD3Graph(graph);
  data = attachLabelsToEdges(data);
  data.nodes.map((node) => {
    return beautifyNodes(node);
  });
  return data;
}

function disableDefaultArrowKeysBehaviour() {
  window.addEventListener(
    "keydown",
    function (e) {
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1
      ) {
        e.preventDefault();
      }
    },
    false
  );
}

const Legends = [
  <Row>
    <Col>
      <img src={circle_node} width="20px" alt="" /> - References
    </Col>
    <Col>
      <img src={cone_node} width="20px" alt="" /> - Citations
    </Col>
  </Row>,
  <Row>
    <Col>
      <p>
        <span className="yellow-text"> Yellow </span>and{" "}
        <span className="green-text">Green</span> denote{" "}
        <span className="red-text">private </span>access papers.
      </p>
    </Col>
    <Col>
      <p>
        <span className="purple-text">Purple </span>and{" "}
        <span className="blue-text">Blue </span> denote{" "}
        <span className="orange-text">public </span> access papers.
      </p>
    </Col>
  </Row>,
];
