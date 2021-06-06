import { updatePaper } from "./LoadedPaperSlice";
import { getPaperFromApi } from "./SemanticScholarAPI";
import store from "./store";
import * as M from "materialize-css";
import { mergePaperWithGraph } from "../Components/GraphOperations";
import { updateGraph } from "./GraphSlice";

export const onPaperInputChange = (paper, state, oldpaper, oldState) => {
  if (paper.paperId !== oldpaper.paperId) {
    if (paper.paperType.toLowerCase() === "arxiv") {
      getPaperFromApi(paper.paperId, paper.paperType).then((response) => {
        updateLoadedPaper(response);
      });
    } else if (paper.paperType.toLowerCase() === "doi") {
      getPaperFromApi(paper.paperId).then((response) => {
        updateLoadedPaper(response);
      });
    } else if (paper.paperType.toLowerCase() === "semanticscholar") {
      getPaperFromApi(paper.paperId).then((response) => {
        updateLoadedPaper(response);
      });
    }
  }
};
function updateLoadedPaper(response) {
  if (response.abstract)
    store.dispatch(
      updatePaper({ paper: response, success: true, isLoading: false })
    );
  else {
    store.dispatch(
      updatePaper({ paper: response, success: false, isLoading: false })
    );
    M.toast({ html: response.error, displayLength: 1000 });
  }
}

export const onLoadedPaperChanged = (paper, state, oldpaper, oldState) => {
  if (paper.success && paper.paper.abstract) {
    // graph preparation happens here
    var graph = state.graph.graph;
    graph = mergePaperWithGraph(paper.paper, graph);
    store.dispatch(updateGraph({ graph: graph }));
  }
};
