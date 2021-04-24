import React, { useEffect, useState } from "react";
import { CardPanel, Col, Container, Row } from "react-materialize";
import { PDFViewer } from "./PDFViewer";
import { NavBar } from "./Components/NavBar";
import { Graph } from "./Components/Graph/Graph";
import watch from "redux-watch";
import { store } from "./store";
import { UserInput } from "./Components/UserInput";

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
            <ShowGraphComponent />

            <ShowPaperInfo />
          </Row>
        </React.Fragment>
      ) : (
        <Container>
          <CardPanel className="large">
            <UserInput />
          </CardPanel>
        </Container>
      )}
    </React.Fragment>
  );
};

export const ShowPaperInfo = () => {
  return (
    <Col l={6}>
      <PDFViewer />
    </Col>
  );
};

export const ShowGraphComponent = () => {
  return (
    <Col l={6}>
      <Graph />
    </Col>
  );
};
