import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Icon, MediaBox, Modal } from "react-materialize";
import * as M from "materialize-css";

const propTypes = {
  nodeData: PropTypes.object.isRequired,
};

const MyNode = ({ nodeData }) => {
  // TODO: check if modal has clickable buttons so that api calls can be fired from the modal itself, also organize the modal output
  return (
    <Modal
      actions={[
        <Button flat modal="close" node="button" waves="green">
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
        startingTop: "4%",
      }}
      trigger={
        <Card
          actions={[
            <a key="1">Open References</a>,
            <a key="2">Open Citations</a>,
          ]}
          className="blue-grey darken-1 "
          closeIcon={<Icon>close</Icon>}
          revealIcon={<Icon>more_vert</Icon>}
          textClassName="white-text"
          title={nodeData.name}></Card>
      }>
      <p>{JSON.stringify(nodeData)}</p>
    </Modal>
  );
};

MyNode.propTypes = propTypes;

export default MyNode;
