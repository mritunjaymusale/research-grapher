import React from "react";
const Icon = React.lazy(() => import("react-materialize/lib/Icon"));

export function PaperLinks({ paper }) {
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
export default PaperLinks;

export const URLComponent = ({ url, id }) => {
  return (
    <a href={url} key="" target="_blank" rel="noopener noreferrer">
      {id}
      <Icon>open_in_new</Icon>
    </a>
  );
};
