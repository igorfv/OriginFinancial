import { render, screen, fireEvent } from '@testing-library/react';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

import DateSelector from './date-selector';

describe('DateSelector', () => {
  it('should render successfully', () => {
    const stub = jest.fn();

    const { baseElement } = render(<DateSelector onChange={stub} />);
    expect(baseElement).toBeTruthy();
  });

  it('should add a month when arrow right is clicked', () => {
    const stub = jest.fn();

    render(<DateSelector onChange={stub} />);

    fireEvent(screen.getByTestId('arrow-right'), new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))

    expect(stub).toBeCalledWith(2)
  });

  it('should remove a month when arrow left is clicked', () => {
    const stub = jest.fn();

    render(<DateSelector onChange={stub} />);

    // Click right 6 times
    (new Array(6)).fill('').forEach(() => {
      fireEvent(screen.getByTestId('arrow-right'), new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }))
    })

    expect(stub).toHaveBeenLastCalledWith(7)

    fireEvent(screen.getByTestId('arrow-left'), new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))

    expect(stub).toHaveBeenLastCalledWith(6)
  });

  it('should display the correct month and year', () => {
    const stub = jest.fn();
    const months = 15

    render(<DateSelector onChange={stub} />);

    // Click right N times
    (new Array(months)).fill('').forEach(() => {
      fireEvent(screen.getByTestId('arrow-right'), new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }))
    })

    const intlMonth = dayjs()
      .add(months, 'month')
      .locale('en')
      .format('MMMM');

    const intlYear = dayjs()
      .add(months, 'month')
      .locale('en')
      .format('YYYY');

    expect(screen.findByText(intlMonth)).toBeTruthy()
    expect(screen.findByText(intlYear)).toBeTruthy()
  });

  it('should change the month when the arrow left/right is pressed', () => {
    const stub = jest.fn();

    render(<DateSelector onChange={stub} />);

    // Click right 6 times
    (new Array(6)).fill('').forEach(() => {
      fireEvent.keyDown(screen.getByTestId('month-input'), {
        key: 'ArrowRight',
      })
    })

    expect(stub).toHaveBeenLastCalledWith(7)

    fireEvent.keyDown(screen.getByTestId('month-input'), {
      key: 'ArrowLeft',
    })

    expect(stub).toHaveBeenLastCalledWith(6)
  });
});
