import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Results from './Results';

describe('displays results from api', () => {
  afterEach(() => cleanup());
  it('renders data from api', () => {
    const { asFragment } = render(<Results results={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});