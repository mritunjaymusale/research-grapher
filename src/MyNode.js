import React, { Component } from "react";
import {
  Button,
  CardPanel,
  Collection,
  CollectionItem,
  Icon,
  Modal,
} from "react-materialize";
import { PaperDetails } from "./Components/PaperDetails";

function showTitleOnTreeNode(props) {
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

const modalActionButtons = [
  // TODO: somehow connect this to the api call and the whole page should react to it 
  <Button flat waves="grey">
    Load Paper
  </Button>,
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

const modalConfig = (data) => {
  return {
    actions: modalActionButtons,
    bottomSheet: false,
    fixedFooter: true,
    header: data.title,
    open: false,
    options: modalOptions,
    // cant turn this into a react component for some reason idk why
    trigger: showTitleOnTreeNode(data),
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
