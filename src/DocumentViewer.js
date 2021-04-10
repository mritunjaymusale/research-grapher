import React, { Component } from "react";
import { ProgressBar } from "react-materialize";
import { ArxivIdContext } from "./Components/Context";

export class DocumentViewer extends Component {
  static contextType = ArxivIdContext;
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

    const pdfURL = `https://arxiv.org/pdf/${this.context.id}.pdf`;
    return (
      <div className="video-container" >
        {this.state.showPDF ? null : <ProgressBar />}
        <iframe
        
          src={pdfURL}
          frameBorder="0"
          onLoad={(event) => this.hideSpinner()}
          allowFullScreen
        />
      </div>
    );
  }
}
