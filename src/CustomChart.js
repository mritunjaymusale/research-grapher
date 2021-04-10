import React, { Component } from "react";
import { Col, Navbar, ProgressBar, Row } from "react-materialize";
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
    return (
      <React.Fragment>
        <div className="navbar-fixed ">
          <Navbar
            className="black"
            brand={
              <a className="brand-logo" href="#">
                {this.state.apiResults.title || "Loading..."}
              </a>
            }
            // TODO:add search button to the right for searching papers and connect it to the context
          />
        </div>
        {this.state.apiResults ? (
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
        ) : (
          <ProgressBar />
        )}
      </React.Fragment>
    );
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
