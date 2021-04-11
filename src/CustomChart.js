import React, { Component } from "react";
import { Col, Navbar, ProgressBar, Row } from "react-materialize";
import { ArxivIdProvider } from "./Components/Context";
import { NavbarSearchButton } from "./Components/NavbarSearchButton";
import { DocumentViewer } from "./DocumentViewer";
import { CollectionNode } from "./CollectionNode";

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
      <ArxivIdProvider>
        <div className="navbar-fixed ">
          <Navbar
            className="black"
            alignLinks="right"
            brand={
              <a className="brand-logo">
                {this.state.apiResults.title || "Loading..."}
              </a>
            }

            // TODO:add search button to the right for searching papers and connect it to the context
          >
            <NavbarSearchButton />
          </Navbar>
        </div>
        {this.state.apiResults ? this.showPaperInfo() : <ProgressBar />}
      </ArxivIdProvider>
    );
  }

  showPaperInfo() {
    return (
      <Row>
        <Col s={6}>
          <DocumentViewer />
        </Col>
        <Col s={6}>
          {/* TODO: whole data is being dumped later only pass references and citations*/}
          <CollectionNode nodeData={this.state.apiResults} />
        </Col>
      </Row>
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
