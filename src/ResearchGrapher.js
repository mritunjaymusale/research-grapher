import React, { useEffect, useState } from "react";
import { CardPanel, Col, Row } from "react-materialize";
import { PDFViewer } from "./PDFViewer";
import { NavBar } from "./Components/NavBar";
import { Graph } from "./Components/Graph/Graph";
import watch from "redux-watch";
import { store } from "./store";

export const ResearchGrapher = () => {
  const [showPaper, setShowPaper] = useState(false);
  useEffect(() => {
    let paper_watcher = watch(store.getState, "arxivReducer.paper");
    store.subscribe(
      paper_watcher((newVal, oldVal, objectPath) =>
        newVal !== null && newVal !== false ? setShowPaper(true) : null
      )
    );
  });
  return (
    <React.Fragment>
      <NavBar />
      {showPaper ? (
        <React.Fragment>
          <Row>
            <Col l={6}>
              <ShowGraphComponent />
            </Col>
            <Col l={6}>
              <ShowPaperInfo />
            </Col>
          </Row>
        </React.Fragment>
      ) : (
        <CardPanel>
          <h5> Please enter arXiv ID of the paper to begin </h5>
        </CardPanel>
      )}
    </React.Fragment>
  );
};

export const ShowPaperInfo = () => {
  return <PDFViewer />;
};

export const ShowGraphComponent = () => {
  return <Graph />;
};
