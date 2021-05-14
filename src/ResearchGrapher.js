import React, { useEffect, useState, Suspense } from "react";
import watch from "redux-watch";
import { useSelector } from "react-redux";
import { NavBar } from "./Components/NavBar";
import { store } from "./StateManagement/store";
import { UserInput } from "./Components/UserInput";
import { PaperDetails } from "./Components/PaperDetails";
import { LoadPaperButton } from "./Components/LoadPaperButton";
import { Card, CardPanel, Col, Container, ProgressBar, Row } from "react-materialize";


const Graph = React.lazy(() => import("./Components/Graph/Graph"));
const PDFViewer = React.lazy(() => import("./PDFViewer"));

export const ResearchGrapher = () => {
  const [showPaper, setShowPaper] = useState(false);

  useEffect(() => {
    let paper_watcher = watch(store.getState, "paperReducer.paper");
    store.subscribe(
      paper_watcher((newVal, oldVal, objectPath) => (newVal !== null && newVal !== false) ? setShowPaper(true) : null)
    );
  });

  return (
    <React.Fragment>
      <NavBar />
      {showPaper ? <ShowPaper /> : <ShowUserInputComponent />}
    </React.Fragment>
  );
};


const ShowPaperDetailsAndPdf = (props) => {
  return (
    <Col l={6}>
      <ShowPaperDetails />
      <ShowPaperPdf />
    </Col>
  );
};


export const ShowPaper = (props) => {
  return (
    <React.Fragment>
      <Row>
        <Col l={6}>
          <ShowGraphWithCurrentNode />
        </Col>
        <ShowPaperDetailsAndPdf />
      </Row>
    </React.Fragment>
  );
};



const ShowPaperDetails = (props) => {
  const [paper, setPaper] = useState(store.getState().paperReducer.paper);
  // This can be generalised for other type of papers aswell
  var arxivPaper = useSelector((state) => state.paperReducer.paper);
  useEffect(() => setPaper(arxivPaper), [arxivPaper]);
  return (
    <Card title="Recently loaded paper">
      <span>Title : {paper.title}</span>
      <PaperDetails paper={paper} />
    </Card>
  );
};


const ShowPaperPdf = () => {
  return (
    <Suspense fallback={<ProgressBar/>}>
      <PDFViewer />
    </Suspense>)
};


const ShowGraphComponent = () => {
  return (
    <Suspense fallback={<ProgressBar/>}>
      <Graph />
    </Suspense>)
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


const ShowCurrentNode = () => {
  const [reducedPaperDetails, setReducedPaperDetails] = useState(null);
  var currently_selected_node = useSelector(
    (state) => state.graphReducer.currently_selected_node
  );
  useEffect(() => {
    if (currently_selected_node)
      setReducedPaperDetails(currently_selected_node.attributes);
  }, [currently_selected_node]);
  return (
    <React.Fragment>
      {currently_selected_node && reducedPaperDetails && (
        <Card title="Selected Node" actions={<LoadPaperButton />}>
          <span>Title : {reducedPaperDetails.title}</span>
          <PaperDetails paper={reducedPaperDetails} />
        </Card>
      )}
    </React.Fragment>
  );
};


const ShowGraphWithCurrentNode = () => {
  return (
    <React.Fragment>
      <Row>
        <ShowGraphComponent />
        <ShowCurrentNode />
      </Row>
    </React.Fragment>
  );
};
