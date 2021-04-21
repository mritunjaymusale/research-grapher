import React, { Component } from "react";
import { CardPanel, Col, Row } from "react-materialize";
import { ArxivIdContext } from "./Components/Context";
import { PDFViewer } from "./PDFViewer";
import { NavBar } from "./Components/NavBar";
import { Graph } from "./Components/Graph/Graph";

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
            <Row>
              <Col l={6}>
                <ShowGraphComponent />
              </Col>
              <Col l={6}>
                <ShowPaperInfo />
              </Col>
            </Row>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export const ShowPaperInfo = () => {
  return <PDFViewer />;
};

export const ShowGraphComponent = () => {
  return <Graph />;
};
