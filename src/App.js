import React, { Suspense } from "react";
import NavBar from "./NavBar";
import * as M from "materialize-css";
import { Col, ProgressBar, Row } from "react-materialize";
import { useSelector } from "react-redux";
import PDFViewer from "./Components/PDFViewer";
import LoadedPaper from "./Components/LoadedPaper";
import CitationGraph from "./Components/CitationGraph";
import SelectedNode from "./Components/SelectedNode";
const Container = React.lazy(() => import("react-materialize/lib/Container"));
const PaperInput = React.lazy(() => import("./Components/PaperInput"));

function App() {
  let isLoadedPaperReady = useSelector((state) => state.loadedPaper.success);

  return (
    <React.Fragment>
      <NavBar />
      <Suspense fallback={<ProgressBar />}>
        {!isLoadedPaperReady && (
          <Container>
            <PaperInput />
          </Container>
        )}
        {isLoadedPaperReady && <GraphWithPaperDetails />}
      </Suspense>
    </React.Fragment>
  );
}

export default App;

const GraphWithPaperDetails = () => {
  return (
    <Row>
      <Col l={6}>
        <CitationGraph />
        <SelectedNode />
        <PaperInput />
      </Col>
      <Col l={6}>
        <LoadedPaper />
        <PDFViewer />
      </Col>
    </Row>
  );
};
