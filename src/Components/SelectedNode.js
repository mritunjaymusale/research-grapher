import React, { Suspense } from "react";
import { Card, ProgressBar } from "react-materialize";
import { useSelector } from "react-redux";
import store from "../store/store";
import { PaperLinks } from "./PaperLinks";
const PaperDetails = React.lazy(() => import("./PaperDetails"));

const SelectedNode = () => {
  const selectedNode = useSelector((state) => state.graph.selectedNode);
  let CardContent, CardActions;
  if (selectedNode) {
    CardContent = <PaperDetails paper={selectedNode} />;
    CardActions = PaperLinks({ paper: selectedNode });
    const LoadPaperComponent = (
      <a href="#"
        onClick={() => {
          // TODO: attach graph merging element here 
          store.dispatch();
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
