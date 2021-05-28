import { addPaper } from "../../store/paperInputSlice";
import store from "../../store/store";
import { Papers } from "../SampleData";

describe("StateChangeListener", () => {
  it("should load arxiv paper", async () => {
    const paperType = "arxiv";
    store.dispatch(
      addPaper({ paperId: Papers.arxiv.arxivId, paperType: paperType })
    );
    // wait till the callbacks are fired
    await new Promise((r) => setTimeout(r, 2000));
    expect(store.getState().loadedPaper.paper.abstract).toStrictEqual(
      Papers.arxiv.abstract
    );
    expect(store.getState().loadedPaper.success).toBeTruthy();
    expect(store.getState().loadedPaper.isLoading).toBeFalsy();
  });

  it("should load doi paper", async () => {
    const paperType = "doi";
    store.dispatch(
      addPaper({ paperId: Papers.doi.doi, paperType: paperType })
    );
    // wait till the callbacks are fired
    await new Promise((r) => setTimeout(r, 2000));
    expect(store.getState().loadedPaper.paper.abstract).toStrictEqual(
      Papers.doi.abstract
    );
    expect(store.getState().loadedPaper.success).toBeTruthy();
    expect(store.getState().loadedPaper.isLoading).toBeFalsy();
  });

  it("should load SemanticScholar paper", async () => {
    const paperType = "semanticscholar";
    store.dispatch(
      addPaper({
        paperId: Papers.SemanticScholar.paperId,
        paperType: paperType,
      })
    );
    // wait till the callbacks are fired
    await new Promise((r) => setTimeout(r, 3000));
    expect(store.getState().loadedPaper.paper.abstract).toStrictEqual(
      Papers.SemanticScholar.abstract
    );
    expect(store.getState().loadedPaper.success).toBeTruthy();
    expect(store.getState().loadedPaper.isLoading).toBeFalsy();
  });

  it("should pass on appropriate flags when error received", async () => {
    const paperType = "arxiv";
    store.dispatch(
      addPaper({
        paperId: Papers.arxiv.arxivId + "asdf",
        paperType: paperType,
      })
    );
    // wait till the callbacks are fired
    await new Promise((r) => setTimeout(r, 2000));
    expect(store.getState().loadedPaper.paper.abstract).toBeFalsy();
    expect(store.getState().loadedPaper.success).toBeFalsy();
    expect(store.getState().loadedPaper.isLoading).toBeFalsy();
    expect(store.getState().loadedPaper.paper.error).toStrictEqual(
      "Paper not found"
    );
  });
});

// TODO: add loadedPaper to graph listener 