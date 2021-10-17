import { render, screen, fireEvent } from '@testing-library/react';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

import SavingsSimulator from './savings-simulator';

describe('SavingsSimulator', () => {
  it('should render successfully', () => {
    const icon = <div>Test</div>;

    const { baseElement } = render(<SavingsSimulator icon={icon} goal='test' />);
    expect(baseElement).toBeTruthy();
  });

  it('should correctly update the component when values are updated', () => {
    const icon = <div>Test</div>;
    const months = 10

    render(<SavingsSimulator icon={icon} goal='test' />);

    expect(screen.getByTestId('summary-wrapper').classList).toContain('hidden');

    fireEvent.change(screen.getByTestId('amount-input'), { target: { value: '25,000' } });

    // Click right N times
    (new Array(months - 1)).fill('').forEach(() => {
      fireEvent(screen.getByTestId('arrow-right'), new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }))
    })

    // Monthly amount value
    expect(screen.getByText('$2,500')).toBeTruthy();

    const intlEndDate = dayjs()
      .add(months, 'month')
      .locale('en')
      .format('MMMM YYYY');

    expect(screen.getByTestId('summary-text').textContent).toEqual(`You’re planning ${months} monthly deposits to reach your $25,000 goal by ${intlEndDate}.`);
  });
});
