import React from 'react'
import { Card, CardPanel, Icon } from 'react-materialize'
import { useSelector } from 'react-redux';

const PDFViewer = () => {
    const paper = useSelector(state => state.loadedPaper.paper);
    const success = useSelector(state => state.loadedPaper.success);
    const isLoading = useSelector(state => state.loadedPaper.isLoading);
    var ShowPdf = null;
    if (success) {

        if (paper.arxivId) {
            ShowPdf = <ShowArxivPaper arxivId={paper.arxivId} />;
        }
        else if (paper.doi) {
            ShowPdf = <a href={`https://doi.org/${paper.doi}`} key="" target="_blank" rel="noopener noreferrer">
                {paper.doi}
                <Icon>open_in_new</Icon>
            </a>
        } else {
            ShowPdf = <a href={paper.url} key="" target="_blank" rel="noopener noreferrer">
                {paper.paperId}
                <Icon>open_in_new</Icon>
            </a>
        }
        return (
            <React.Fragment>
                {ShowPdf}
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <CardPanel>
                <span>
                    Unable to load the paper
                </span>
            </CardPanel>
        </React.Fragment>
    )
}

export default PDFViewer


// TODO : Future use when multiple openaccess papers can be rendered
export const ShowOpenAccessPapers = ({ paper }) => {
    let url;

    // Check open access type
    if (paper.arxivId) {
        url = `https://arxiv.org/pdf/${paper.arxivId}.pdf`
    } else {
        // TODO: make some sort of prompt that paper available openly but not supported in our pdf viewer
    }
    return (
        <CardComponent url={url} />
    )
}

export const ShowArxivPaper = ({ arxivId }) => {
    let url = `https://arxiv.org/pdf/${arxivId}.pdf`

    return (<React.Fragment>

        <CardComponent url={url} id={arxivId} ></CardComponent>


    </React.Fragment>
    )
}



export const CardComponent = ({ url, id }) => {
    return (
        <Card title="Preview"
            actions={[
                <a href={url} key="" target="_blank" rel="noopener noreferrer">
                    {id}
                    <Icon>open_in_new</Icon>
                </a>
            ]}
        >
            <iframe src={url} frameBorder="0"></iframe>


        </Card>

    )
}


// return (
//     <Card title="Preview">
//       <PopUpUrlLink url={url} paper={paper} />
//       <div className="video-container">
//         {progressBar ? <ProgressBar /> : null}
//         {showPDF ? (
//           <iframe title='pdf_viewer'
//             src={url}
//             frameBorder="0"
//             onLoad={(event) => setProgressBar(false)}
//             allowFullScreen
//           />
//         ) : null}
//       </div>
//     </Card>
//   );