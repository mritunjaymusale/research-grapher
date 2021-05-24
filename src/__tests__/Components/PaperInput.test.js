import React from 'react';
import { render, screen, waitFor, cleanup } from '../test-utils';
import PaperInput from '../../Components/PaperInput'
import { initialState } from '../../store/paperInputSlice'
import store from '../../store/store'
import userEvent from '@testing-library/user-event';

describe('PaperInput', () => {
    beforeEach(() => {
        render(<PaperInput />, { initialState, store });
    })
    afterEach(cleanup)

    // UI checks
    it('should have Card component', async () => {
        await waitFor(() => {
            expect(document.querySelector('div.card')).toBeInTheDocument();
        })
    })
    it('should have "Enter the ID of the paper you are looking for" text', () => {
        const heading = "Enter the ID of the paper you are looking for";
        screen.getByText(heading);
    })
    it('should have PaperInput element', () => {
        screen.getByRole('textbox')
        screen.getByText('Enter paper ID here')
    })
    it('should have 3 paper types options', () => {
        screen.getAllByRole('radio')
        screen.getByText('ArXiv')
        screen.getByText('DOI')
        screen.getByText('SemanticScholar')
    })
    it('should have submit button', () => {
        screen.getByRole('button', { value: 'Generate Graph' })
    })

    // User interaction tests
    it('should add an ArXiv paper to store', () => {
        const paperId = '1705.10311'
        const paperType = 'ArXiv'

        submitPaper(paperId, paperType);

        expect(store.getState().paperInput).toStrictEqual({ paperId: paperId, paperType: paperType })
    })
    it('should add a DOI paper to store', () => {
        const paperId = '10.1002/asna.202113881'
        const paperType = 'DOI'

        submitPaper(paperId, paperType)

        expect(store.getState().paperInput).toStrictEqual({ paperId: paperId, paperType: paperType })
    })
    it('should add a SemanticScholar paper to store', () => {
        const paperId = '0796f6cd7f0403a854d67d525e9b32af3b277331'
        const paperType = 'SemanticScholar'

        submitPaper(paperId, paperType)

        expect(store.getState().paperInput).toStrictEqual({ paperId: paperId, paperType: paperType })
    })


})

function submitPaper(paperId, paperType) {
    userEvent.type(screen.getByRole('textbox'), paperId);
    userEvent.click(screen.getByText(paperType));
    userEvent.click(screen.getByRole('button', { value: 'Generate Graph' }));
}
