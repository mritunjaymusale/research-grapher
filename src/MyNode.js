import React from "react";
import { Button, CardPanel, Modal } from "react-materialize";

export const MyNode = ({ nodeData }) => {
  const modalOptions = {
    dismissible: true,
    endingTop: "10%",
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    opacity: 0.5,
    outDuration: 250,
    preventScrolling: true,
  };
  const modalActionButtons = [
    <Button flat waves="grey">
      References
    </Button>,
    <Button flat waves="grey">
      Citations
    </Button>,
    <Button flat modal="close" node="button" waves="grey">
      Close
    </Button>,
  ];
  // TODO: mount API calls to modal buttons (collapse other nodes on the same level to avoid huge unnecessary graphs)
  // TODO: citationVelocity: 591,influentialCitationCount: 498 <--check these tags accordingly the card should have a diffrent color to avoid huge citation generation
  // TODO: add semanticscholar url for links without arxivID or doi
  return (
    <Modal
      actions={modalActionButtons}
      bottomSheet={false}
      fixedFooter={false}
      header={nodeData.name}
      id="Modal-0"
      open={false}
      options={modalOptions}
      trigger={
        <CardPanel className="blue accent-2">
          <span className="white-text">{nodeData.name}</span>
        </CardPanel>
      }>
      <PaperDetails nodeData={nodeData} />
    </Modal>
  );
};

export const PaperDetails = (props) => {
  const nodeData = props.nodeData;
  return (
    <p>
      Authors : {nodeData.authors ? showAuthorNames(nodeData) : "Unknown"}
      <br />
      Year : {nodeData.year ? nodeData.year : "Unknown"}
      <br />
      <ShowAbstract abstract={nodeData.abstract} />
      Venue : {nodeData.venue ? nodeData.venue : "Unknown"}
      <br />
      <h6>Links:</h6>
      arXiv :{" "}
      {nodeData.arxivId ? (
        <a href={"https://arxiv.org/abs/" + nodeData.arxivId}>
          {nodeData.arxivId}
        </a>
      ) : (
        "Unknown"
      )}
      <br />
      doi :{" "}
      {nodeData.doi ? (
        <a href={"https://doi.org/" + nodeData.doi}>{nodeData.doi}</a>
      ) : (
        "Unknown"
      )}
      {/* FOR DEBUGGING */}
      {/* <br/>
        {JSON.stringify(nodeData)} */}
    </p>
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
