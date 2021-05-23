import { loadPaper } from "./LoadPaperSlice"
import { getPaperFromApi } from "./SemanticScholarAPI"
import store from "./store"

export const onPaperInputChange = (paper, state, oldpaper, oldState) => {
    if (paper.paperId !== oldpaper.paperId) {
        getPaperFromApi(paper.paperId, paper.paperType).then(response => {
            if (response.abstract)
                store.dispatch(loadPaper({ paper: response, success: true, isLoading: false }));
            else
                store.dispatch(loadPaper({ paper: response, success: false, isLoading: false }));
        })
    }
}
