import PDFViewer from '../../Components/PDFViewer';
import { render, screen, waitFor, cleanup } from '../test-utils';
import store from '../../store/store'

describe('PDFViewer', () => {
    beforeEach(() => {
        render(<PDFViewer />, { store:store });
    })
    afterEach(cleanup)
    it('should render on null input', () => {
        screen.getAllByText('Preview')
    })
})
