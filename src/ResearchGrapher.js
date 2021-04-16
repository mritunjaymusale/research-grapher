import React, { Component } from "react";
import { CardPanel, Col, Row } from "react-materialize";
import { ArxivIdContext } from "./Components/Context";
import { PDFViewer } from "./PDFViewer";
import { CitationsAndReferencesList } from "./CollectionNode";
import { NavBar } from "./Components/NavBar";
import { Graph } from "./Graph";

export default class ResearchGrapher extends Component {
  static contextType = ArxivIdContext;

  render() {
    return (
      <React.Fragment>
        <NavBar />
        {this.context.id === "" && this.context.isLoading ? (
          <CardPanel>
            <h5> Please enter arXiv ID of the paper to begin </h5>
          </CardPanel>
        ) : (
          <React.Fragment>
            <ShowGraphComponent />
            <ShowPaperInfo />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export const ShowPaperInfo = () => {
  return (
    <Row>
      <Col s={6}>
        <PDFViewer />
      </Col>
      <Col s={6}>
        <CitationsAndReferencesList />
      </Col>
    </Row>
  );
};

export const ShowGraphComponent = () => {
  return <Graph />;
};
