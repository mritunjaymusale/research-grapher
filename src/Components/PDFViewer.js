import React from 'react'
import { Card, Icon } from 'react-materialize'
import { useSelector } from 'react-redux';

const PDFViewer = () => {
    const paper = useSelector(state => state.loadedPaper.paper);
    const success = useSelector(state => state.loadedPaper.success);
    const isLoading = useSelector(state => state.loadedPaper.isLoading);
    var ShowPdf = null;
    if (success) {

        if (paper.arxivId) {
            ShowPdf = <CardComponent url={`https://arxiv.org/pdf/${paper.arxivId}.pdf`} id={paper.arxivId} ></CardComponent>
        }
        else if (paper.doi) {
            ShowPdf = <DoiCard paper={paper} />
        } else {
            ShowPdf = <SemanticScholarCard paper={paper} />
        }

    } else {
        ShowPdf = (
            <Card title="Preview">
                <span>
                    Unable to load the paper
                </span>
            </Card>)
    }

    return (
        <React.Fragment>

            {ShowPdf}

        </React.Fragment>
    )
}

export default PDFViewer



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


function SemanticScholarCard({ paper }) {
    return <Card title="Preview">
        <a href={paper.url} key="" target="_blank" rel="noopener noreferrer">
            {paper.paperId}
            <Icon>open_in_new</Icon>
        </a>

    </Card>;
}

function DoiCard({ paper }) {
    return <Card title="Preview">
        <a href={`https://doi.org/${paper.doi}`} key="" target="_blank" rel="noopener noreferrer">
            {paper.doi}
            <Icon>open_in_new</Icon>
        </a>

    </Card>;
}

