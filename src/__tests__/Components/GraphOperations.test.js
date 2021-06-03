import {
  convertToD3Graph,
  mergePaperWithGraph,
  attachLabelsToEdges,
  beautifyNodes,
} from "../../Components/GraphOperations";

import Graph, { DirectedGraph } from "graphology";
import { Papers } from "../SampleData";
describe("GraphOperations", () => {
  let graph;
  beforeEach(() => {
    graph = new DirectedGraph();
    graph = mergePaperWithGraph(Papers.arxiv, graph);
  });

  it("should merge Papers with Graph", () => {
    expect(graph).toBeInstanceOf(Graph);
  });

  it("should have right number of nodes ", () => {
    expect(graph.toJSON().nodes.length).toStrictEqual(
      // +1 at the end for the base paper itself
      Papers.arxiv.references.length + Papers.arxiv.citations.length + 1
    );
  });
});

describe("D3SpecificOperations", () => {
  let graph;
  beforeEach(() => {
    graph = new DirectedGraph();
    graph = mergePaperWithGraph(Papers.arxiv, graph);
    graph = convertToD3Graph(graph);
  });

  it("should convert to D3 compatible graph", () => {
    expect(graph.links).not.toBeNull();
    expect(graph.id).not.toBeNull();
  });

  it("should make D3 Style annotations on edges", () => {
    graph = attachLabelsToEdges(graph);

    expect(typeof graph.links[0].label).toBe("string");
    expect(typeof graph.links[0].source).toBe("string");
    expect(typeof graph.links[0].target).toBe("string");
  });

  it("should beautify nodes of graph", () => {
    graph.nodes.map((node) => {
      var test_node = beautifyNodes(node);
      // colorize
      if (test_node.attributes.arxivId) {
        expect(test_node.text_color).toStrictEqual("#3d5afe");
        expect(test_node.node_color).toStrictEqual("#d500f9");
      } else {
        expect(test_node.text_color).toStrictEqual("#FEE13D");
        expect(test_node.node_color).toStrictEqual("#13EC40");
      }
      // geometry
      if (test_node.attributes.isReference) {
        expect(test_node.geometry.type).toStrictEqual("SphereGeometry");
      } else if (test_node.attributes.isCitation) {
        expect(test_node.geometry.type).toStrictEqual("ConeGeometry");
      } else {
        expect(test_node.geometry.type).toStrictEqual("BoxGeometry");
      }
    });
  });
});
