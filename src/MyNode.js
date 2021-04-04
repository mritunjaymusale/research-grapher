import React from "react";
import PropTypes from "prop-types";
import { Button, CardPanel, Modal } from "react-materialize";

const propTypes = {
  nodeData: PropTypes.object.isRequired,
};

const MyNode = ({ nodeData }) => {
  // TODO: Find a Tree DS library to store more and more complex trees as more and more citations show up
  // TODO: check if modal has clickable buttons so that api calls can be fired from the modal itself, also organize the modal output
  // TODO: incase if references or Citations is clicked use state info to collapse rest of the elements in that level and then fetch from the API
  return (
    <Modal
      actions={[
        <Button flat waves="grey">
          References
        </Button>,
        <Button flat waves="grey">
          Citations
        </Button>,
        <Button flat modal="close" node="button" waves="grey">
          Close
        </Button>,
      ]}
      bottomSheet={false}
      fixedFooter={false}
      header={nodeData.name}
      id="Modal-0"
      open={false}
      options={{
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
        // startingTop: "50%",
      }}
      trigger={
        <CardPanel className="blue accent-2">
          <span className="white-text">{nodeData.name}</span>
        </CardPanel>
      }>
      <p>
        Authors : {nodeData.authors ? showAuthorNames(nodeData) : "Unknown"}
        <br />
        Year : {nodeData.year ? nodeData.year : "Unknown"}
        <br />
        <ShowAbstract abstract={nodeData.abstract} />
        Venue : {nodeData.venue ? nodeData.venue : "Unknown"}
        <br />
        doi : {nodeData.doi ? nodeData.doi : "Unknown"}
        {/* FOR DEBUGGING */}
        {/* {JSON.stringify(nodeData)} */}
      </p>
    </Modal>
  );
};

MyNode.propTypes = propTypes;

export default MyNode;

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
