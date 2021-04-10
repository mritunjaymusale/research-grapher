import React, { Component } from "react";
import { Col, Row } from "react-materialize";
import { ArxivIdProvider } from "./Components/Context";
import { DocumentViewer } from "./DocumentViewer";
import { CollectionNode } from "./MyNode";

export default class CustomChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResults: false,
    };
  }
  componentDidMount() {
    // TODO: mount ID to buttons of references and citations
    let arXivID = "1710.09829";
    fetchPaperDetailsFromAPI(arXivID).then((result) => {
      this.setState({
        apiResults: result,
      });
    });
  }

  render() {
    if (this.state.apiResults) {
      var pdfURL = null;

      return (
        <Row>
          <ArxivIdProvider>
            <Col s={6}>
              <DocumentViewer />
            </Col>
            <Col s={6}>
              {/* TODO: whole data is being dumped later only pass references and citations*/}
              <CollectionNode nodeData={this.state.apiResults} />
            </Col>
          </ArxivIdProvider>
        </Row>
      );
    }
    return <div>nothing</div>;
  }
}
function fetchPaperDetailsFromAPI(arXivID) {
  return fetch(
    "https://api.semanticscholar.org/v1/paper/arXiv:" +
      arXivID +
      "?include_unknown_references=true"
  ).then(
    (res) => res.json(),
    // fetch error
    (error) => {}
  );
}
