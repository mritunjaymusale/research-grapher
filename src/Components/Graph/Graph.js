import SpriteText from "three-spritetext";
import React, { Component } from "react";
import { D3GraphProcessor } from "./GraphDataProcessor";
import { ForceGraph3D } from "react-force-graph";
import { store } from "../../StateManagement/store";
import watch from "redux-watch";
import { Group, Mesh, MeshBasicMaterial, LineBasicMaterial, BufferGeometry, BufferAttribute, Line } from "three";
import { Card, Col, Divider, Icon, Row } from "react-materialize";
import { truncate } from "../utils";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import circle_node from './circle_node.svg';
import cone_node from './cone_node.svg';

export class Graph extends Component {
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
    const bloomPass = new UnrealBloomPass();
    bloomPass.strength = 0.3;
    bloomPass.radius = 0.2;
    bloomPass.exposure = 1.1;
    bloomPass.threshold = 0.1;
    fg.postProcessingComposer().addPass(bloomPass);

    disableDefaultArrowKeysBehaviour();
  }
  render() {
    var graph = this.state.graph;
    graph = D3GraphProcessor.convertToD3Graph(graph);
    const { attributes, options, ...data } = graph;

    return (
      <Card title="Citation Graph"

        actions={Legends}
      >
        <ForceGraph3D
          controlType='fly'
          width={window.innerWidth / 2.2}
          height={window.innerHeight / 2}
          ref={this.myRef}
          graphData={data}
          nodeThreeObject={makeCustomNodes}
          onNodeClick={updateCurrentlySelectedNodeInStore}
          backgroundColor="#101020"
          linkThreeObject={generateBrightLinks}
          cooldownTime={Infinity}
        />



      </Card>
    );
  }
}

const Legends = [
  <Row>
    <Col>
      <img src={circle_node} width='20px' /> - References
    </Col>
    <Col>
      <img src={cone_node} width='20px' /> - Citations
    </Col>
  </Row>,
  <Row>
    <Col>
      <p>

        <span className="yellow-text"> Yellow </span>and <span className="green-text">Green</span> denote <span className="red-text">private </span>access
      </p>
    </Col>
    <Col>
      <p>
        <span className="purple-text">Purple </span>and <span className="blue-text">Blue </span> denote <span className="orange-text">public </span> access
      </p>
    </Col>
  </Row>
];



const generateBrightLinks = link => {
  const linkColors = new Float32Array([255, 255, 255]);
  const material = new LineBasicMaterial({ vertexColors: true, transparent: true });
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(new Float32Array(2 * 3), 3));
  geometry.setAttribute('color', new BufferAttribute(linkColors, 3));

  return new Line(geometry, material);
};
const updateCurrentlySelectedNodeInStore = (node, event) => {
  store.dispatch({
    type: "UPDATE_CURRENTLY_SELECTED_NODE",
    node: node,
  });
};
const makeCustomNodes = (node) => {
  var truncated_id = truncate(node.id, 25);
  const sprite = generateSpriteText(truncated_id, node);

  const mesh = generateNodeGeometry(node);

  var group = new Group();
  group.add(sprite, mesh);
  return group;
};

function disableDefaultArrowKeysBehaviour() {
  window.addEventListener("keydown", function (e) {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
      e.preventDefault();
    }
  }, false);
}

function generateNodeGeometry(node) {
  const material = new MeshBasicMaterial({ color: node.node_color });

  const mesh = new Mesh(node.geometry, material);
  return mesh;
}

function generateSpriteText(truncated_id, node) {
  const sprite = new SpriteText(truncated_id);
  sprite.color = node.text_color;
  sprite.textHeight = 18;
  sprite.position.y = 11;
  return sprite;
}
