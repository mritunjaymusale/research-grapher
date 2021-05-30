import React, { Suspense } from "react";
import NavBar from "./NavBar";
import * as M from "materialize-css";
import { Col, Container, ProgressBar, Row } from "react-materialize";
import { useSelector } from "react-redux";
import PDFViewer from "./Components/PDFViewer";
import LoadedPaper from "./Components/LoadedPaper";

const PaperInput = React.lazy(() => import("./Components/PaperInput"));

function App() {
  let isLoadedPaperReady = useSelector((state) => state.loadedPaper.success);

  return (
    <div>
      <NavBar />
      <Suspense fallback={<ProgressBar />}>
        {!isLoadedPaperReady && <PaperInput />}
        <Row>
          {isLoadedPaperReady && (
            <React.Fragment>
              <Col l={6}></Col>
              <Col l={6}>
                <LoadedPaper />
                <PDFViewer />
              </Col>
            </React.Fragment>
          )}
        </Row>
      </Suspense>
    </div>
  );
}

export default App;
