import { render } from '@testing-library/react';

import SavingsSimulator from './savings-simulator';

describe('SavingsSimulator', () => {
  it('should render successfully', () => {
    const icon = <div>Test</div>;

    const { baseElement } = render(<SavingsSimulator icon={icon} goal='test' />);
    expect(baseElement).toBeTruthy();
  });
});
