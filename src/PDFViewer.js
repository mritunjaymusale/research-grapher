import React, { useEffect, useState } from "react";
import { Card, Icon, ProgressBar } from "react-materialize";
import { useSelector } from "react-redux";

export const PDFViewer = (props) => {
  const [showPDF, setShowPDF] = useState(false);
  var paper = useSelector((state) => state.paperReducer.paper);
  const [progressBar, setProgressBar] = useState(true);
  const [url, setUrl] = useState("");

  useEffect(() => {
    setURlBasedOnPaperAvailability(paper, setUrl, setShowPDF, setProgressBar);
  });
  return (
    <Card title="Preview">
      <PopUpUrlLink url={url} paper={paper} />
      <div className="video-container">
        {progressBar ? <ProgressBar /> : null}
        {showPDF ? (
          <iframe
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
export const PopUpUrlLink = (props) => {
  if (props.paper && props.url) {
    return (
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        {props.paper.paperId}
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
  if (paper.isOpenAccess && !paper.arxivId) {
    setUrl(paper.url);
    setShowPDF(false);
    setProgressBar(false);
  }
  if (paper.arxivId) {
    setUrl(`https://arxiv.org/pdf/${paper.arxivId}.pdf`);
    setShowPDF(true);
    setProgressBar(false);
  }
}
