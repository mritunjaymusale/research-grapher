import { addPaper } from '../../store/paperInputSlice'
import store from '../../store/store'
import { SampleData } from './SampleData'



describe('StateChangeListener', () => {
    it('should load paper when PaperInput changes', async () => {
        const paperId = '1705.10311';
        const paperType = 'arxiv';
        store.dispatch(addPaper({ paperId: paperId, paperType: paperType }));
        // wait till the callbacks are fired  
        await new Promise((r) => setTimeout(r, 2000));
        expect(store.getState().loadPaper.paper.abstract).toStrictEqual(SampleData.arxiv.abstract);
        expect(store.getState().loadPaper.success).toBeTruthy();
        expect(store.getState().loadPaper.isLoading).toBeFalsy();
    });

    it('should pass on appropriate flags when error received', async () => {
        const paperId = '1705.10311a';
        const paperType = 'arxiv';
        store.dispatch(addPaper({ paperId: paperId, paperType: paperType }));
        // wait till the callbacks are fired  
        await new Promise((r) => setTimeout(r, 2000));
        expect(store.getState().loadPaper.paper.abstract).toBeFalsy();
        expect(store.getState().loadPaper.success).toBeFalsy();
        expect(store.getState().loadPaper.isLoading).toBeFalsy();
    });
})