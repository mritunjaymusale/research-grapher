import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../NavBar'


describe('Navbar', () => {

  it('shows Project title', () => {
    const { getByText, container } = render(<NavBar />);
    getByText('Research Grapher');
    // check for center align 
    expect(container.querySelector('a.center')).toBeInTheDocument();
  });

  it('should be black', () => {
    const { container } = render(<NavBar />);
    expect(container.querySelector('nav.black')).toBeInTheDocument();
  })


})
