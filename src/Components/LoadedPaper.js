import React, { Suspense } from "react";
import { Icon, ProgressBar } from "react-materialize";
import { useSelector } from "react-redux";
import PaperDetails from "./PaperDetails";
const Card = React.lazy(() => import("react-materialize/lib/Card"));

const LoadedPaper = () => {
  const paper = useSelector((state) => state.loadedPaper.paper);
  const success = useSelector((state) => state.loadedPaper.success);
  const isLoading = useSelector((state) => state.loadedPaper.isLoading);

  let PaperLinks = null;
  if (success) {
    PaperLinks = extractLinksFromPaper(paper);
  }
  return (
    <Suspense fallback={<ProgressBar />}>
      <Card title="Loaded Paper" actions={PaperLinks}>
        {success && <PaperDetails paper={paper} />}
      </Card>
    </Suspense>
  );
};

export default LoadedPaper;

export const URLComponent = ({ url, id }) => {
  return (
    <a href={url} key="" target="_blank" rel="noopener noreferrer">
      {id}
      <Icon>open_in_new</Icon>
    </a>
  );
};
function extractLinksFromPaper(paper) {
  return [
    paper.arxivId && (
      <URLComponent
        url={`https://arxiv.org/pdf/${paper.arxivId}.pdf`}
        id={paper.arxivId}
        key={paper.arxivId}
      />
    ),
    paper.doi && (
      <URLComponent
        url={`https://doi.org/${paper.doi}`}
        id={paper.doi}
        key={paper.doi}
      />
    ),
    paper.url && (
      <URLComponent url={paper.url} id={paper.paperId} key={paper.paperId} />
    ),
  ];
}
