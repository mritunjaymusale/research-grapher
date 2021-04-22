import React, { Component, useEffect, useState } from "react";
import * as M from "materialize-css";
import { CustomModal } from "../CustomModal";
import { Card, CardPanel, Row } from "react-materialize";
import { GraphRenderer } from "./GraphRenderer";
import watch from "redux-watch";
import { store } from "../../store";
import { useSelector } from "react-redux";

export class Graph extends Component {
  state = { modal: null };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Card title="Citation Graph">
          <GraphRenderer
            onClickNode={(node) => {
              store.dispatch({
                type: "UPDATE_CURRENTLY_SELECTED_NODE",
                node: node,
              });
            }}
          />
        </Card>

        <PaperInfo />
      </React.Fragment>
    );
  }
}

export default function PaperInfo(props) {
  const [modal, setModal] = useState(null);

  var modalOptions = {
    bottomSheet: true,
    id: "graphpapermodal",
  };

  // after paper is updated, update graph to include data of papers
  let currently_node_watcher = watch(
    store.getState,
    "graphReducer.currently_selected_node"
  );
  store.subscribe(
    currently_node_watcher((newVal, oldVal, objectPath) => {
      if (newVal !== oldVal) {
        setModal(
          <CustomModal modalOptions={modalOptions} node={newVal.attributes} />
        );
      }
    })
  );

  useEffect(() => {
    if (modal) {
      setTimeout(() => {
        M.Modal.getInstance(document.getElementById("graphpapermodal")).open();
      }, 70);
    }
  });
  return <div>{modal}</div>;
}
