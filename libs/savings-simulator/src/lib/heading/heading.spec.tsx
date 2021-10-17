import { render, screen } from '@testing-library/react';

import Heading from './heading';

describe('Heading', () => {
  it('should render successfully', () => {
    const icon = <div>Test</div>;

    const { baseElement } = render(<Heading icon={icon} goal='test' />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the goal text', () => {
    const goal = 'test';
    const icon = <div>{goal}</div>;

    render(<Heading icon={icon} goal={goal} />);
    expect(screen.findByText(goal)).toBeTruthy();
  });
});
