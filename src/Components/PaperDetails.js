import React from "react";
import { Icon } from "react-materialize";

export const PaperDetails = (props) => {
  const paper = props.paper;
  const arxivLinkConfig = {
    URL: "https://arxiv.org/abs/" + paper.arxivId,
    location_name: "arXiv",
    paperId: paper.arxivId,
  };
  const doiLinkConfig = {
    URL: "https://doi.org/" + paper.doi,
    location_name: "doi",
    paperId: paper.doi,
  };
  const SemanticScholarLinkConfig = {
    URL: paper.url,
    location_name: "SemanticScholar",
    paperId: paper.paperId,
  };

  return (
    <div>
      Authors : {paper.authors ? showAuthorNames(paper) : "Unknown"}
      <br />
      Year : {paper.year ? paper.year : "Unknown"}
      <br />
      <ShowAbstract abstract={paper.abstract} />
      Venue : {paper.venue ? paper.venue : "Unknown"}
      <br />
      <h6>Links:</h6>
      {paper.arxivId ? <LinkTemplate {...arxivLinkConfig} /> : null}
      {paper.doi ? <LinkTemplate {...doiLinkConfig} /> : null}
      {paper.url ? <LinkTemplate {...SemanticScholarLinkConfig} /> : null}
    </div>
  );
};

export const LinkTemplate = (props) => {
  return (
    <div>
      {props.location_name} :
      <a href={props.URL} target="_blank" rel="noopener noreferrer">
        {props.paperId}
        <Icon>open_in_new</Icon>
      </a>
    </div>
  );
};

function ShowAbstract(props) {
  if (props.abstract) return <div> Abstract : {props.abstract} </div>;
  else return null;
}

function showAuthorNames(paper) {
  return paper.authors
    .map((author) => {
      return author.name;
    })
    .join(", ");
}
