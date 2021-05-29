import { mergePaperWithGraph } from "../../Components/GraphOperations";
import Graph, { DirectedGraph } from "graphology";
import { Papers } from "../SampleData";
describe("GraphOperations", () => {
  it("should merge Papers with Graph", () => {
    var graph = new DirectedGraph();
    graph = mergePaperWithGraph(Papers.arxiv,graph);
    expect(graph).toBeInstanceOf(Graph);
  });

  it("should have right number of nodes ", () => {
    var graph = new DirectedGraph();
    graph = mergePaperWithGraph(Papers.arxiv,graph);
    expect(graph.toJSON().nodes.length).toStrictEqual(
      // +1 at the end for the base paper itself
      Papers.arxiv.references.length + Papers.arxiv.citations.length + 1
    );
  });
});
