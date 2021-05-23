import { getPaperFromApi } from '../../store/SemanticScholarAPI'
import {SampleData} from './SampleData'

describe('SemanticSholarAPI', () => {
    it('should fetch arxiv paper details from API', async () => {
        await getPaperFromApi("1705.10311", 'ArXiv').then((paper) => expect(paper.abstract).toStrictEqual(SampleData.arxiv.abstract))
    })
    it('should fetch doi paper details from API', async () => {
        await getPaperFromApi("10.1002/asna.202113881").then((paper) => expect(paper.abstract).toStrictEqual(SampleData.doi.abstract))
    })
    it('should throw error for incorrect IDs', async () => {
        await getPaperFromApi("asdf10.1002/asna.202113881").then((data) => expect(data.error).toStrictEqual("Paper not found"))
    })
})
