import { DirectedGraph } from "graphology";
import { convertPaperToGraph } from "../../Components/GraphOperations";
import { updateGraph, initialState } from "../../store/GraphSlice";
import { default as BaseStore } from "../../store/store";
import { Papers } from "../SampleData";

describe("GraphSlice ", () => {
  let store;
  beforeEach(() => {
    store = BaseStore;
  });
  it("should have initialState", () => {
    expect(initialState).toStrictEqual({
      graph: new DirectedGraph(),
    });
  });

  it("should merge graphed paper into the main graph", () => {
    const graph = convertPaperToGraph(Papers.arxiv);
    store.dispatch(updateGraph({ graph: graph }));

    expect(store.getState().graph.graph.toJSON().nodes.length).toStrictEqual(
      Papers.arxiv.references.length + Papers.arxiv.citations.length + 1
    );
  });
});
