import { render, screen } from '@testing-library/react';

import Title from './title';

describe('Title', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Title>test</Title>);
    expect(baseElement).toBeTruthy();
  });

  it('should display the children', () => {
    const children = 'test';
    render(<Title>{children}</Title>);
    expect(screen.getByText(children)).toBeTruthy();
  });
});
