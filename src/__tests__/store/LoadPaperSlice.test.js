import { loadPaper, initialState } from "../../store/LoadPaperSlice"
import store from '../../store/store'
import { SampleData } from './SampleData'

describe('LoadPaperSlice ', () => {
    it('should have initialState', () => {
        expect(initialState).toStrictEqual({
            paper: null,
            success: false,
            isLoading: false
        })
    });
    it('should add new paperId', async () => {
        const paperId = '1705.10311'
        const paperType = 'arxiv'
        await store.dispatch(loadPaper({ paper: SampleData.arxiv, success: true, isLoading: false }))
        expect(store.getState().loadPaper.paper).not.toBeNull();
        expect(store.getState().loadPaper.success).toBeTruthy();
        expect(store.getState().loadPaper.isLoading).toBeFalsy();
    });

    it('should add an arxiv paper to store', async () => {
        const paperId = '1705.10311'
        const paperType = 'arxiv'
        await store.dispatch(loadPaper({ paper: SampleData.arxiv, success: true, isLoading: false }))
        expect(store.getState().loadPaper.paper.abstract).toStrictEqual(SampleData.arxiv.abstract);
        expect(store.getState().loadPaper.success).toBeTruthy();
        expect(store.getState().loadPaper.isLoading).toBeFalsy();
    })
    it('should add a doi paper to store', async () => {
        const paperId = '10.1002/asna.202113881'
        await store.dispatch(loadPaper({ paper: SampleData.doi, success: true, isLoading: false }));
        expect(store.getState().loadPaper.paper.abstract).toStrictEqual(SampleData.doi.abstract);
    })
    it('should add a semanticscholar paper to store', async () => {
        const paperId = '0796f6cd7f0403a854d67d525e9b32af3b277331'
        await store.dispatch(loadPaper({ paper: SampleData.SemanticScholar, success: true, isLoading: false }));
        expect(store.getState().loadPaper.paper.abstract).toStrictEqual(SampleData.SemanticScholar.abstract);
        expect(store.getState().loadPaper.success).toBeTruthy();
        expect(store.getState().loadPaper.isLoading).toBeFalsy();
    })

})
