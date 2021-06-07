import React, { Suspense } from "react";
import ProgressBar from "react-materialize/lib/ProgressBar";
import { useSelector } from "react-redux";

const Card = React.lazy(() => import("react-materialize/lib/Card"));
const PaperDetails = React.lazy(() => import("./PaperDetails"));
const PaperLinks = React.lazy(() => import("./PaperLinks"));

const LoadedPaper = () => {
  const paper = useSelector((state) => state.loadedPaper.paper);
  const success = useSelector((state) => state.loadedPaper.success);
  const isLoading = useSelector((state) => state.loadedPaper.isLoading);

  return (
    <Suspense fallback={<ProgressBar />}>
      <Card
        title="Loaded Paper"
        actions={success && <PaperLinks paper={paper} />}>
        {success && <PaperDetails paper={paper} />}
      </Card>
    </Suspense>
  );
};

export default LoadedPaper;
