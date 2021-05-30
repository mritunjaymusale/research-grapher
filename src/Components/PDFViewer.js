import React, { Suspense } from "react";
import { ProgressBar } from "react-materialize";
import { useSelector } from "react-redux";
const Card = React.lazy(() => import("react-materialize/lib/Card"));
const Icon = React.lazy(() => import("react-materialize/lib/Icon"));

const PDFViewer = () => {
  const paper = useSelector((state) => state.loadedPaper.paper);
  const success = useSelector((state) => state.loadedPaper.success);
  const isLoading = useSelector((state) => state.loadedPaper.isLoading);
  var ShowPdf = null;
  if (success) {
    if (paper.arxivId) {
      ShowPdf = (
        <CardComponent
          url={`https://arxiv.org/pdf/${paper.arxivId}.pdf`}
          id={paper.arxivId}
        ></CardComponent>
      );
    } else if (paper.doi) {
      ShowPdf = <DoiCard paper={paper} />;
    } else {
      ShowPdf = <SemanticScholarCard paper={paper} />;
    }
  } else {
    ShowPdf = (
      <Card title="Preview">
        <span>Unable to load the paper</span>
      </Card>
    );
  }

  return <Suspense fallback={<ProgressBar />}>{ShowPdf}</Suspense>;
};

export default PDFViewer;

export const CardComponent = ({ url, id }) => {
  return (
    <Card
      title="Preview"
      actions={[
        <a href={url} key="" target="_blank" rel="noopener noreferrer">
          {id}
          <Icon>open_in_new</Icon>
        </a>,
      ]}
    >
      {/* TODO: fix the size of the iframe element */}
      <iframe src={url} frameBorder="0"></iframe>
    </Card>
  );
};

function SemanticScholarCard({ paper }) {
  return (
    <Card title="Preview">
      <a href={paper.url} key="" target="_blank" rel="noopener noreferrer">
        {paper.paperId}
        <Icon>open_in_new</Icon>
      </a>
    </Card>
  );
}

function DoiCard({ paper }) {
  return (
    <Card title="Preview">
      <a
        href={`https://doi.org/${paper.doi}`}
        key=""
        target="_blank"
        rel="noopener noreferrer"
      >
        {paper.doi}
        <Icon>open_in_new</Icon>
      </a>
    </Card>
  );
}
