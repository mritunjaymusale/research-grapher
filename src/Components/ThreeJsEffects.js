import {
  Group,
  Mesh,
  MeshBasicMaterial,
  LineBasicMaterial,
  BufferGeometry,
  BufferAttribute,
  Line,
} from "three";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import SpriteText from "three-spritetext";

export const generateBrightLinks = (link) => {
  const linkColors = new Float32Array([255, 255, 255]);
  const material = new LineBasicMaterial({
    vertexColors: true,
    transparent: true,
  });
  const geometry = new BufferGeometry();
  geometry.setAttribute(
    "position",
    new BufferAttribute(new Float32Array(2 * 3), 3)
  );
  geometry.setAttribute("color", new BufferAttribute(linkColors, 3));

  return new Line(geometry, material);
};

export const makeCustomNodes = (node) => {
  var truncated_id = truncate(node.id, 25);
  const sprite = generateSpriteText(truncated_id, node);

  const mesh = generateNodeGeometry(node);

  var group = new Group();
  group.add(sprite, mesh);
  return group;
};


export const addUnrealBloomPass = (ref) => {
  if (ref !== null) {
    ref.d3Force("link").distance((link) => 500);

    var bloomPassObject = ref
      .postProcessingComposer()
      .passes.find((x) => x instanceof UnrealBloomPass);

    // if the render passes do not contain a bloom object then add it
    if (!bloomPassObject) {
      bloomPassObject = new UnrealBloomPass();
      setBloomParameters(bloomPassObject);
      ref.postProcessingComposer().addPass(bloomPassObject);
    }
  }
};

export function setBloomParameters(bloomPassObject) {
  bloomPassObject.strength = 0.3;
  bloomPassObject.radius = 0.2;
  bloomPassObject.exposure = 0.7;
  bloomPassObject.threshold = 0.1;
}



export function generateNodeGeometry(node) {
  const material = new MeshBasicMaterial({ color: node.node_color });

  const mesh = new Mesh(node.geometry, material);
  return mesh;
}

export function generateSpriteText(truncated_id, node) {
  const sprite = new SpriteText(truncated_id);
  sprite.color = node.text_color;
  sprite.textHeight = 18;
  sprite.position.y = 11;
  return sprite;
}

export function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
}