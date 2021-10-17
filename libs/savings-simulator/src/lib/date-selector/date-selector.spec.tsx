import { render } from '@testing-library/react';

import DateSelector from './date-selector';

describe('DateSelector', () => {
  it('should render successfully', () => {
    const stub = jest.fn();

    const { baseElement } = render(<DateSelector onChange={stub} />);
    expect(baseElement).toBeTruthy();
  });
});
