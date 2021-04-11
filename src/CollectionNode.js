import React, { Component, useContext } from "react";
import {
  Button,
  Collection,
  CollectionItem,
  Modal,
  ProgressBar,
} from "react-materialize";
import { ArxivIdContext } from "./Components/Context";
import { PaperDetails } from "./Components/PaperDetails";

function showTitleOnCollection(props) {
  return <CollectionItem href>{props.title}</CollectionItem>;
}


class ModalActionButtons extends Component {
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

const modalConfig = (data) => {
  return {
    actions: <ModalActionButtons data={data} />,
    bottomSheet: false,
    fixedFooter: true,
    header: data.title,
    open: false,
    // cant turn this into a react component for some reason idk why
    trigger: showTitleOnCollection(data),
  };
};

export const References = () => {
  const context = useContext(ArxivIdContext);
  if (context.paperDetails.references.length > 0)
    return context.paperDetails.references.map((reference) => {
      return (
        <Modal {...modalConfig(reference)} bottomSheet>
          <PaperDetails nodeData={reference} />
        </Modal>
      );
    });
  else return <CollectionItem>No references yet</CollectionItem>;
};
export const Citations = () => {
  const context = useContext(ArxivIdContext);
  if (context.paperDetails.citations.length > 0)
    return context.paperDetails.citations.map((citation) => {
      return (
        <Modal {...modalConfig(citation)} bottomSheet>
          <PaperDetails nodeData={citation} />
        </Modal>
      );
    });
  else return <CollectionItem>No citations yet</CollectionItem>;
};

const collectionStyle = {
  overflow: "scroll",
  maxHeight: "700px",
};

export const CitationsAndReferencesList = () => {
  const context = useContext(ArxivIdContext);
  return (
    <React.Fragment>
      <Collection header="References" style={collectionStyle}>
        {!context.isLoading ? <References /> : <ProgressBar />}
      </Collection>

      <Collection header="Citations" style={collectionStyle}>
        {!context.isLoading ? <Citations /> : <ProgressBar />}
      </Collection>
    </React.Fragment>
  );
};
