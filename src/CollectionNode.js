import React, { Component } from "react";
import {
  Button,
  Card,
  Collection,
  CollectionItem,
  Modal,
} from "react-materialize";
import { ArxivIdContext } from "./Components/Context";
import { PaperDetails } from "./Components/PaperDetails";
import { resetModals } from "./utils";

function showTitleOnCollection(props) {
  return <CollectionItem href>{props.title}</CollectionItem>;
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

class ModalActionButtons extends Component {
  static contextType = ArxivIdContext;
  render() {
    return (
      <div>
        {this.props.data.arxivId ? (
          <Button
            flat
            waves="light"
            onClick={(event) => {
              resetModals();
              this.context.updateArxivId(this.props.data.arxivId);
            }}
            tooltip="Preview the paper in the PDF Window"
            tooltipOptions={{
              position: "top",
            }}>
            Load Paper
          </Button>
        ) : null}

        <Button flat waves="light">
          References
        </Button>

        <Button flat waves="light">
          Citations
        </Button>

        <Button flat modal="close" node="button" waves="light">
          Close
        </Button>
      </div>
    );
  }
}

const modalConfig = (data) => {
  return {
    actions: <ModalActionButtons data={data} />,
    bottomSheet: false,
    fixedFooter: true,
    header: data.title,
    open: false,
    options: modalOptions,
    // cant turn this into a react component for some reason idk why
    trigger: showTitleOnCollection(data),
  };
};
export class CollectionNode extends Component {
  // TODO: refactor this
  render() {
    return (
      <div>
        <Collection
          header="References"
          style={{
            overflow: "scroll",
            maxHeight: "700px",
          }}>
          {this.props.nodeData.references.map((reference) => {
            return (
              <Modal {...modalConfig(reference)} bottomSheet>
                <PaperDetails nodeData={reference} />
              </Modal>
            );
          })}
        </Collection>

        <Collection
          header="Citations"
          style={{
            overflow: "scroll",
            maxHeight: "700px",
          }}>
          {this.props.nodeData.citations.map((citation) => {
            return (
              <Modal {...modalConfig(citation)} bottomSheet>
                <PaperDetails nodeData={citation} />
              </Modal>
            );
          })}
        </Collection>
      </div>
    );
  }
}
