import React, { Suspense } from "react";
import * as M from "materialize-css";
import ProgressBar from "react-materialize/lib/ProgressBar";
import { useSelector } from "react-redux";
const NavBar = React.lazy(() => import("./NavBar"));
const PDFViewer = React.lazy(() => import("./Components/PDFViewer"));
const LoadedPaper = React.lazy(() => import("./Components/LoadedPaper"));
const CitationGraph = React.lazy(() => import("./Components/CitationGraph"));
const SelectedNode = React.lazy(() => import("./Components/SelectedNode"));
const Container = React.lazy(() => import("react-materialize/lib/Container"));
const PaperInput = React.lazy(() => import("./Components/PaperInput"));
const Row = React.lazy(() => import("react-materialize/lib/Row"));
const Col = React.lazy(() => import("react-materialize/lib/Col"));

function App() {
  let isLoadedPaperReady = useSelector((state) => state.loadedPaper.success);

  return (
    <React.Fragment>
      <Suspense fallback={<ProgressBar />}>
        <NavBar />
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
