import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import Home from '../../container/home/Home';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});

  it('renders Home', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
});
