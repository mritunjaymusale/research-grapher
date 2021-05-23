import React from 'react';
import { render, screen, waitFor } from './test-utils';
import App from '../App';

describe('App ', () => {
  beforeEach(() => {
    render(<App />);
  })
  it('renders ', async () => {
    await screen.findByText('Research Grapher')

    // for PaperInput
    await waitFor(() => expect(screen.getByText('Enter the ID of the paper you are looking for')).toBeInTheDocument())



  });

})

