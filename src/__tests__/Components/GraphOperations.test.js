import {
  convertToD3Graph,
  mergePaperWithGraph,
  attachLabelsToEdges,
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
    expect(graph.links[0].label).toBeInstanceOf(String);
    expect(graph.links[0].label).toBeInstanceOf(String);
    expect(graph.links[0].label).toBeInstanceOf(String);
  });
});
