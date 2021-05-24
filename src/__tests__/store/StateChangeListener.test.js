import { cleanup } from '@testing-library/react'
import { addPaper } from '../../store/paperInputSlice'
import store from '../../store/store'
import { SampleData } from './SampleData'



describe('StateChangeListener', () => {
    afterEach(cleanup);
    it('should load paper when PaperInput changes', async () => {
        const paperType = 'arxiv';
        store.dispatch(addPaper({ paperId: SampleData.arxiv.arxivId, paperType: paperType }));
        // wait till the callbacks are fired  
        await new Promise((r) => setTimeout(r, 2000));
        expect(store.getState().loadedPaper.paper.abstract).toStrictEqual(SampleData.arxiv.abstract);
        expect(store.getState().loadedPaper.success).toBeTruthy();
        expect(store.getState().loadedPaper.isLoading).toBeFalsy();
    });

    it('should pass on appropriate flags when error received', async () => {
        const paperType = 'arxiv';
        store.dispatch(addPaper({ paperId: SampleData.arxiv.arxivId + 'asdf', paperType: paperType }));
        // wait till the callbacks are fired  
        await new Promise((r) => setTimeout(r, 2000));
        expect(store.getState().loadedPaper.paper.abstract).toBeFalsy();
        expect(store.getState().loadedPaper.success).toBeFalsy();
        expect(store.getState().loadedPaper.isLoading).toBeFalsy();
        expect(store.getState().loadedPaper.paper.error).toStrictEqual("Paper not found")
    });
})