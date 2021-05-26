import { addPaper, initialState } from "../../store/paperInputSlice";
import store from "../../store/store";

describe("PaperInputSlice ", () => {
  it("should have initialState", () => {
    expect(initialState).toStrictEqual({ paperId: "", paperType: "" });
  });
  it("should add new paperId", () => {
    const paperId = "1705.10311";
    const paperType = "arxiv";
    store.dispatch(addPaper({ paperId: paperId, paperType: paperType }));
    expect(store.getState().paperInput).toStrictEqual({
      paperId: paperId,
      paperType: paperType,
    });
  });

  it("should add an arxiv paper to store", () => {
    const paperId = "1705.10311";
    const paperType = "arxiv";
    store.dispatch(addPaper({ paperId: paperId, paperType: paperType }));
    expect(store.getState().paperInput).toStrictEqual({
      paperId: paperId,
      paperType: paperType,
    });
  });
  it("should add a doi paper to store", () => {
    const paperId = "10.1002/asna.202113881";
    const paperType = "doi";
    store.dispatch(addPaper({ paperId: paperId, paperType: paperType }));
    expect(store.getState().paperInput).toStrictEqual({
      paperId: paperId,
      paperType: paperType,
    });
  });
  it("should add a semanticscholar paper to store", () => {
    const paperId = "0796f6cd7f0403a854d67d525e9b32af3b277331";
    const paperType = "semanticscholar";
    store.dispatch(addPaper({ paperId: paperId, paperType: paperType }));
    expect(store.getState().paperInput).toStrictEqual({
      paperId: paperId,
      paperType: paperType,
    });
  });
});
