import React, { Suspense } from "react";
import ProgressBar from "react-materialize/lib/ProgressBar";
import { useSelector } from "react-redux";
import { updatePaper } from "../store/LoadedPaperSlice";
import { getPaperFromApi } from "../store/SemanticScholarAPI";
import store from "../store/store";
import { PaperLinks } from "./PaperLinks";
import * as M from "materialize-css";

const PaperDetails = React.lazy(() => import("./PaperDetails"));
const Card = React.lazy(() => import("react-materialize/lib/Card"));
const SelectedNode = () => {
  const selectedNode = useSelector((state) => state.graph.selectedNode);
  let CardContent, CardActions;
  if (selectedNode) {
    CardContent = <PaperDetails paper={selectedNode} />;
    CardActions = PaperLinks({ paper: selectedNode });
    const LoadPaperComponent = (
      <a
        href="#"
        onClick={() => {
          updateLoadedPaperAndGraph(selectedNode);
        }}>
        Load Paper
      </a>
    );
    CardActions.unshift(LoadPaperComponent);
  } else CardContent = "Currently no node is selected...";
  return (
    <Suspense fallback={<ProgressBar />}>
      <Card title="Selected Paper" actions={CardActions}>
        {CardContent}
      </Card>
    </Suspense>
  );
};

export default SelectedNode;

function updateLoadedPaperAndGraph(selectedNode) {
  if (selectedNode.arxivId) {
    getPaperFromApi(selectedNode.arxivId, "arxiv").then((response) => {
      updateLoadedPaper(response);
    });
  } else if (selectedNode.doi) {
    getPaperFromApi(selectedNode.paperId).then((response) => {
      updateLoadedPaper(response);
    });
  } else if (selectedNode.paperId) {
    getPaperFromApi(selectedNode.paperId).then((response) => {
      updateLoadedPaper(response);
    });
  }
}

// ! copied from StateChangeListener as is
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
