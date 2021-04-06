import React from "react";
import { Button, CardPanel, Icon, Modal } from "react-materialize";
import { PaperDetails } from "./Components/PaperDetails";

export const MyNode = ({ nodeData }) => {
  const modalConfig = {
    actions: modalActionButtons,
    bottomSheet: false,
    fixedFooter: true,
    header: nodeData.name,
    open: false,
    options: modalOptions,
    trigger: showTitleOnTreeNode(nodeData),
  };

  return (
    <Modal {...modalConfig} bottomSheet>
      <PaperDetails nodeData={nodeData} />
    </Modal>
  );
};
function showTitleOnTreeNode(nodeData) {
  return (
    <CardPanel className="blue accent-2">
      <span className="white-text">
        {nodeData.name}
        {nodeData.isInfluential ? (
          <Icon className="material-icons">star</Icon>
        ) : null}
      </span>
    </CardPanel>
  );
}
const modalOptions = {
  dismissible: true,
  onCloseEnd: null,
  onCloseStart: null,
  onOpenEnd: null,
  onOpenStart: null,
  opacity: 0.7,
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
