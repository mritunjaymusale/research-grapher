import { DirectedGraph } from "graphology";
import { mergePaperWithGraph } from "../../Components/GraphOperations";
import { updateGraph, initialState } from "../../store/GraphSlice";
import { addPaper } from "../../store/paperInputSlice";
import store from "../../store/store";
import { Papers } from "../SampleData";

describe("GraphSlice ", () => {
  
  
  it("should have initialState", () => {
    expect(initialState).toStrictEqual({
      graph: new DirectedGraph(),
    });
  });

  it("should merge paper into the main graph", async () => {
    var graph = store.getState().graph.graph;
    graph = mergePaperWithGraph(Papers.arxiv, graph);
    store.dispatch(updateGraph({ graph: graph }));
    expect(store.getState().graph.graph.toJSON().nodes.length).toStrictEqual(
      Papers.arxiv.references.length + Papers.arxiv.citations.length + 1
    );
  });
  
});

// Use this for integration tests
// var paperId = "2105.04906";
// var paperType = "arxiv";
// store.dispatch(addPaper({ paperId: paperId, paperType: paperType }));
// await new Promise((r) => setTimeout(r, 2000));
// var paperId = "2012.04718";
// var paperType = "arxiv";
// store.dispatch(addPaper({ paperId: paperId, paperType: paperType }));
// await new Promise((r) => setTimeout(r, 2000));
// console.log(store.getState().graph.graph.toJSON().nodes.length);
