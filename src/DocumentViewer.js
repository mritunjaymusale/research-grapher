import React, { Component } from "react";
import { ProgressBar } from "react-materialize";

export class DocumentViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPDF: false,
    };
  }

  hideSpinner() {
    this.setState({
      showPDF: true,
    });
  }
  render() {
    // TODO: fix pdfjs css for fitting the page veritically
    return (
      <div className="video-container">
        {this.state.showPDF ? null : <ProgressBar />}
        <iframe
          src={this.props.pdfURL}
          frameBorder="0"
          onLoad={(event) => this.hideSpinner()}
          allowFullScreen
        />
      </div>
    );
  }
}
