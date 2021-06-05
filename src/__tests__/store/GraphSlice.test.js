import { DirectedGraph } from "graphology";
import { mergePaperWithGraph } from "../../Components/GraphOperations";
import {
  updateGraph,
  initialState,
  changeSelectedNode,
} from "../../store/GraphSlice";
import { addPaper } from "../../store/paperInputSlice";
import store from "../../store/store";
import { Papers } from "../SampleData";

describe("GraphSlice ", () => {
  it("should have initialState", () => {
    expect(initialState).toStrictEqual({
      graph: new DirectedGraph(),
      selectedNode: null,
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
  it("should change the currently selected node", () => {
    store.dispatch(changeSelectedNode({ node: Papers.arxiv }));
    expect(store.getState().graph.selectedNode).toStrictEqual(Papers.arxiv);
  });
});
