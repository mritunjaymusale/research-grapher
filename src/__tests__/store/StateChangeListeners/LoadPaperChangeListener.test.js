import { addPaper } from "../../../store/paperInputSlice";
import store from "../../../store/store";

describe("StateChangeListener:LoadedPaperChangeListener", () => {
  it("should fire when Loadpaper changes", async () => {
    var paperId = "2105.04906";
    var paperType = "arxiv";
    store.dispatch(addPaper({ paperId: paperId, paperType: paperType }));
    await new Promise((r) => setTimeout(r, 2000));
    paperId = "2012.04718";
    paperType = "arxiv";
    store.dispatch(addPaper({ paperId: paperId, paperType: paperType }));
    await new Promise((r) => setTimeout(r, 2000));
    expect(store.getState().graph.graph.toJSON().nodes.length).toStrictEqual(
      108
    );
  });
});
