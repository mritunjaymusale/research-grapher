import PDFViewer from '../../Components/PDFViewer';
import { render, waitFor, screen } from '../test-utils';
import store from '../../store/store'
import { SampleData } from '../store/SampleData';
import { updatePaper } from '../../store/LoadedPaperSlice';



describe('PDFViewer', () => {
    beforeEach(() => {
        render(<PDFViewer />, { store: store });
    });


    it('should render on null input', () => {
        render(<PDFViewer />, { store: store })
        screen.getAllByText('Preview');

        screen.getAllByText('Unable to load the paper');
        // when no paper is loaded no need to show the preview
        expect(document.querySelector('iframe')).not.toBeInTheDocument();
    });
});

describe('PDFViewer', () => {

    beforeEach(() => {
        render(<PDFViewer />, { store: store });
    });


    it('should render arxiv paper', () => {
        store.dispatch(updatePaper({ paper: SampleData.arxiv, success: true, isLoading: false }));
        screen.getAllByText('Preview');
        screen.getByText(SampleData.arxiv.arxivId)
        screen.getByRole('link', { value: `https://arxiv.org/pdf/${SampleData.arxiv.arxivId}.pdf` })
        expect(document.querySelector('iframe').contentWindow.location.href).toEqual(`https://arxiv.org/pdf/${SampleData.arxiv.arxivId}.pdf`);

    });

    it('should render doi paper', () => {
        store.dispatch(updatePaper({ paper: SampleData.doi, success: true, isLoading: false }));
        screen.getAllByText('Preview');
        screen.getByText(SampleData.doi.doi)
        screen.getByRole('link', { value: `https://doi.org/${SampleData.doi.doi}` })
        expect(document.querySelector('iframe')).not.toBeInTheDocument();
    });

    it('should render SemanticScholar paper', () => {
        const { arxivId, doi, ...paper } = SampleData.SemanticScholar
        store.dispatch(updatePaper({ paper: paper, success: true, isLoading: false }));
        screen.getAllByText('Preview');
        screen.getByText(SampleData.SemanticScholar.paperId)
        screen.getByRole('link', { value: SampleData.SemanticScholar.url })
        expect(document.querySelector('iframe')).not.toBeInTheDocument();
    });
});
