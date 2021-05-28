import { convertPaperToGraph } from "../../Components/GraphOperations";
import Graph from "graphology";
import { Papers } from "../SampleData";
describe("GraphOperations", () => {
  it("should convert Paper to Graph", () => {
    const graph = convertPaperToGraph(Papers.arxiv);
    expect(graph).toBeInstanceOf(Graph);
  });

  it("should have right number of nodes ", () => {
    const graph = convertPaperToGraph(Papers.arxiv);
    expect(graph.toJSON().nodes.length).toStrictEqual(
      // +1 at the end for the base paper itself
      Papers.arxiv.references.length + Papers.arxiv.citations.length + 1
    );
  });
});
