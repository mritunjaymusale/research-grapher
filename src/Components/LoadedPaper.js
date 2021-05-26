import React, { Suspense } from "react";
import { Icon, ProgressBar } from "react-materialize";
import { useSelector } from "react-redux";

const Card = React.lazy(() => import("react-materialize/lib/Card"));

const LoadedPaper = () => {
  const paper = useSelector((state) => state.loadedPaper.paper);
  const success = useSelector((state) => state.loadedPaper.success);
  const isLoading = useSelector((state) => state.loadedPaper.isLoading);
  let PaperDetails = null;
  let PaperLinks = null;
  if (success) {
    PaperDetails = <PaperDetailsComponent paper={paper} />;
    PaperLinks = extractLinksFromPaper(paper);
  } else {
  }
  return (
    <Suspense fallback={<ProgressBar />}>
      <Card title="Loaded Paper" actions={PaperLinks}>
        {PaperDetails}
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

function PaperDetailsComponent({ paper }) {
  return (
    <div>
      {paper.title && <p>{"Title : " + paper.title}</p>}
      {paper.authors && (
        <p>{"Authors : " + paper.authors.map((author) => author.name)}</p>
      )}
      {paper.year && <p>{"Year : " + paper.year}</p>}
      {paper.abstract && <p>{"Abstract : " + paper.abstract}</p>}
      {paper.venue && <p>{"Venue : " + paper.venue}</p>}
    </div>
  );
}
