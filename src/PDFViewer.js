import React, { useEffect, useState } from "react";
import { Card, Icon, ProgressBar } from "react-materialize";
import { useSelector } from "react-redux";
import { store } from "./StateManagement/store";

export const PDFViewer = (props) => {
  const [showPDF, setShowPDF] = useState(false);
  var paper = useSelector((state) => state.paperReducer.paper);
  const [progressBar, setProgressBar] = useState(true);
  const [url, setUrl] = useState("");

  useEffect(() => {
    setURlBasedOnPaperAvailability(paper, setUrl, setShowPDF, setProgressBar);
  }, [paper]);
  return (
    <Card title="Preview">
      <PopUpUrlLink url={url} paper={paper} />
      <div className="video-container">
        {progressBar ? <ProgressBar /> : null}
        {showPDF ? (
          <iframe title='pdf_viewer'
            src={url}
            frameBorder="0"
            onLoad={(event) => setProgressBar(false)}
            allowFullScreen
          />
        ) : null}
      </div>
    </Card>
  );
};

export default PDFViewer;


export const PopUpUrlLink = (props) => {
  if (props.paper && props.url) {
    return (
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        {props.url}
        <Icon>open_in_new</Icon>
      </a>
    );
  }
  return null;
};

// Can this be push into Redux?
function setURlBasedOnPaperAvailability(
  paper,
  setUrl,
  setShowPDF,
  setProgressBar
) {
  if (paper.isOpenAccess) {
    // TODO: if other opensource pdf viewer is then update this section
    setUrl(paper.url);
    setShowPDF(false);
    setProgressBar(false);
  }
  if (paper.arxivId) {
    setUrl(`https://arxiv.org/pdf/${paper.arxivId}.pdf`);
    setShowPDF(true);
    setProgressBar(false);
  }
  if (!paper.isOpenAccess && !paper.arxivId) {
    // TODO: remove the preview component if the paper is not available for public
    store.dispatch({
      type: "SEND_TOAST",
      toast: "Loaded paper is not available for public access hence no preview",
    });
    setUrl("");
    setShowPDF(false);
    setProgressBar(true);
  }
}
