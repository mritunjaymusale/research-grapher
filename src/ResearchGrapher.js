import React, { useEffect, useState } from "react";
import { CardPanel, Col, Container, Row } from "react-materialize";
import { PDFViewer } from "./PDFViewer";
import { NavBar } from "./Components/NavBar";
import { Graph } from "./Components/Graph/Graph";
import watch from "redux-watch";
import { store } from "./StateManagement/store";
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
      {showPaper ? <ShowGraphWithPdf /> : <ShowUserInputComponent />}
    </React.Fragment>
  );
};

const ShowPaperPdf = () => {
  return (
    <Col l={6}>
      <PDFViewer />
    </Col>
  );
};

const ShowGraphComponent = () => {
  return (
    <Col l={6}>
      <Graph />
    </Col>
  );
};

const ShowUserInputComponent = () => {
  return (
    <Container>
      <CardPanel className="large">
        <UserInput />
      </CardPanel>
    </Container>
  );
};
const ShowGraphWithPdf = () => {
  return (
    <React.Fragment>
      <Row>
        <ShowGraphComponent />

        <ShowPaperPdf />
      </Row>
    </React.Fragment>
  );
};
