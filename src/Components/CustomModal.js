import { ArxivIdContext } from "./Context";
import React, { Component } from "react";
import { Button, Modal } from "react-materialize";
import { PaperDetails } from "./PaperDetails";

export class ModalActionButtons extends Component {
  static contextType = ArxivIdContext;
  render() {
    return (
      <div>
        {this.props.data.arxivId ? (
          <Button
            flat
            modal="close"
            node="button"
            waves="light"
            onClick={(event) => {
              this.context.updateArxivId(this.props.data.arxivId);
            }}
            tooltip="Preview the paper in the PDF Window"
            tooltipOptions={{
              position: "top",
            }}>
            Load Paper
          </Button>
        ) : null}

        <Button flat modal="close" node="button" waves="light">
          Close
        </Button>
      </div>
    );
  }
}

export const defaultModalConfig = (data) => {
  return {
    actions: <ModalActionButtons data={data} />,
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
