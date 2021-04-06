import React from "react";
import { Icon } from "react-materialize";

export const PaperDetails = (props) => {
  const nodeData = props.nodeData;
  const arxivLinkConfig = {
    URL: "https://arxiv.org/abs/" + nodeData.arxivId,
    location_name: "arXiv",
    paperId: nodeData.arxivId,
  };
  const doiLinkConfig = {
    URL: "https://doi.org/" + nodeData.doi,
    location_name: "doi",
    paperId: nodeData.doi,
  };
  const SemanticScholarLinkConfig = {
    URL: nodeData.url,
    location_name: "SemanticScholar",
    paperId: nodeData.paperId,
  };

  return (
    <div>
      Authors : {nodeData.authors ? showAuthorNames(nodeData) : "Unknown"}
      <br />
      Year : {nodeData.year ? nodeData.year : "Unknown"}
      <br />
      <ShowAbstract abstract={nodeData.abstract} />
      Venue : {nodeData.venue ? nodeData.venue : "Unknown"}
      <br />
      <h6>Links:</h6>
      {nodeData.arxivId ? <LinkTemplate {...arxivLinkConfig} /> : null}
      {nodeData.doi ? <LinkTemplate {...doiLinkConfig} /> : null}
      {nodeData.url ? <LinkTemplate {...SemanticScholarLinkConfig} /> : null}
      {/* FOR DEBUGGING */}
      {/* <br/>
          {JSON.stringify(nodeData)} */}
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

function showAuthorNames(nodeData) {
  return nodeData.authors
    .map((author) => {
      return author.name;
    })
    .join(", ");
}
