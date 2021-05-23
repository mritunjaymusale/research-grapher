import React from 'react';
import { render, screen, waitFor, cleanup } from './test-utils';
import App from '../App';
import store from '../store/store';
import { SampleData } from './store/SampleData';
import { updatePaper } from '../store/LoadedPaperSlice';

describe('App ', () => {
  beforeEach(() => {
    render(<App />, { store: store });
  });
  afterEach(cleanup);

  it('renders ', async () => {
    await screen.findByText('Research Grapher')

    // for PaperInput
    await waitFor(() => expect(screen.getByText('Enter the ID of the paper you are looking for')).toBeInTheDocument())



  });

  it('should show PDF after loadedPaper is available', async () => {
    store.dispatch(updatePaper({ paper: SampleData.arxiv, success: true, isLoading: false }))
    // for PDFViewer
    await waitFor(() => screen.getAllByText('Preview'))



  });


})

