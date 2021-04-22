import React from "react";
import { Button, Modal } from "react-materialize";
import { PaperDetails } from "./PaperDetails";
import { useDispatch } from "react-redux";

export const ModalActionButtons = (props) => {
  const dispatch = useDispatch();

  const showLoadPaperButton = (
    <Button
      {...defaultButtonConfig}
      onClick={(event) => {
        dispatch({
          type: "UPDATE_ARXIV_ID",
          newId: props.paper.arxivId,
        });
      }}
      tooltip="Preview the paper in the PDF Window"
      tooltipOptions={{
        position: "top",
      }}>
      Load Paper
    </Button>
  );
  return (
    <div>
      {props.paper.arxivId ? showLoadPaperButton : null}

      <Button {...defaultButtonConfig}>Close</Button>
    </div>
  );
};

const defaultButtonConfig = {
  flat: true,
  modal: "close",
  node: "button",
  waves: "light",
};

export const defaultModalConfig = (data) => {
  return {
    actions: <ModalActionButtons paper={data} />,
    bottomSheet: false,
    fixedFooter: true,
    header: data.title,
    open: false,
  };
};

export const CustomModal = (props) => {
  return (
    <Modal {...defaultModalConfig(props.node)} {...props.modalOptions}>
      <PaperDetails nodeData={props.node} />
    </Modal>
  );
};
