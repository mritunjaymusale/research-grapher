import React, { Component, useContext } from "react";
import {
  Button,
  Collection,
  CollectionItem,
  Modal,
  ProgressBar,
} from "react-materialize";
import { ArxivIdContext } from "./Components/Context";
import { CustomModal } from "./Components/CustomModal";

function showTitleOnCollection(props) {
  return <CollectionItem href>{props.title}</CollectionItem>;
}

export const References = () => {
  const context = useContext(ArxivIdContext);
  if (context.paperDetails.references.length > 0)
    return context.paperDetails.references.map((reference) => {
      var modalOptions = {
        bottomSheet: true,
        trigger: showTitleOnCollection(reference),
      };
      return <CustomModal modalOptions={modalOptions} node={reference} />;
    });
  else return <CollectionItem>No references yet</CollectionItem>;
};
export const Citations = () => {
  const context = useContext(ArxivIdContext);

  if (context.paperDetails.citations.length > 0)
    return context.paperDetails.citations.map((citation) => {
      var modalOptions = {
        bottomSheet: true,
        trigger: showTitleOnCollection(citation),
      };
      return <CustomModal modalOptions={modalOptions} node={citation} />;
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
