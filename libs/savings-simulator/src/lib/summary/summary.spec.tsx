import { render } from '@testing-library/react';

import Summary from './summary';

describe('Summary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Summary amount={25000} numberOfMonths={48} />);
    expect(baseElement).toBeTruthy();
  });
});
