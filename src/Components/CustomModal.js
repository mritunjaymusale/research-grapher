import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-materialize";
import { PaperDetails } from "./PaperDetails";
import { useDispatch, useSelector } from "react-redux";
import { LoadPaperButton } from "./LoadPaperButton";

export const ModalActionButtons = (props) => {
  return (
    <div>
      {props.paper.arxivId ? <LoadPaperButton /> : null}

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
    <Modal {...defaultModalConfig(props.paper)} {...props.modalOptions}>
      <PaperDetails paper={props.paper} />
    </Modal>
  );
};

