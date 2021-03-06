import { updatePaper, initialState } from "../../store/LoadedPaperSlice";
import store from "../../store/store";
import { Papers } from "../SampleData";

describe("LoadedPaperSlice ", () => {
  it("should have initialState", () => {
    expect(initialState).toStrictEqual({
      paper: null,
      success: false,
      isLoading: false,
    });
  });
  it("should add new paperId", async () => {
    await store.dispatch(
      updatePaper({ paper: Papers.arxiv, success: true, isLoading: false })
    );
    expect(store.getState().loadedPaper.paper).not.toBeNull();
    expect(store.getState().loadedPaper.success).toBeTruthy();
    expect(store.getState().loadedPaper.isLoading).toBeFalsy();
  });

  it("should add an arxiv paper to store", async () => {
    await store.dispatch(
      updatePaper({ paper: Papers.arxiv, success: true, isLoading: false })
    );
    expect(store.getState().loadedPaper.paper.abstract).toStrictEqual(
      Papers.arxiv.abstract
    );
    expect(store.getState().loadedPaper.success).toBeTruthy();
    expect(store.getState().loadedPaper.isLoading).toBeFalsy();
  });
  it("should add a doi paper to store", async () => {
    await store.dispatch(
      updatePaper({ paper: Papers.doi, success: true, isLoading: false })
    );
    expect(store.getState().loadedPaper.paper.abstract).toStrictEqual(
      Papers.doi.abstract
    );
    expect(store.getState().loadedPaper.success).toBeTruthy();
    expect(store.getState().loadedPaper.isLoading).toBeFalsy();
  });
  it("should add a semanticscholar paper to store", async () => {
    await store.dispatch(
      updatePaper({
        paper: Papers.SemanticScholar,
        success: true,
        isLoading: false,
      })
    );
    expect(store.getState().loadedPaper.paper.abstract).toStrictEqual(
      Papers.SemanticScholar.abstract
    );
    expect(store.getState().loadedPaper.success).toBeTruthy();
    expect(store.getState().loadedPaper.isLoading).toBeFalsy();
  });
});
