import { render, screen } from '@testing-library/react';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

import Summary from './summary';

describe('Summary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Summary amount={25000} numberOfMonths={48} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the correct monthly amount', () => {
    render(<Summary amount={25000} numberOfMonths={48} />);
    expect(screen.getByText('$521')).toBeTruthy();
  });


  it('should render the correct summary text', () => {
    const numberOfMonths = 48

    const intlEndDate = dayjs()
      .add(numberOfMonths, 'month')
      .locale('en')
      .format('MMMM YYYY');

    render(<Summary amount={25000} numberOfMonths={numberOfMonths} />);
    expect(screen.getByTestId('summary-text').textContent).toEqual(`You’re planning 48 monthly deposits to reach your $25,000 goal by ${intlEndDate}.`);
  });

  it('should hide the summary when amount is $0', () => {
    render(<Summary amount={0} numberOfMonths={48} />);
    expect(screen.getByTestId('summary-wrapper').classList).toContain('hidden');
  });
});
