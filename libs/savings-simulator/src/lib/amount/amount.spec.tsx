import { render, screen, fireEvent } from '@testing-library/react';

import Amount from './amount';

describe('Amount', () => {
  it('should render successfully', () => {
    const stub = jest.fn();

    const { baseElement } = render(<Amount onChange={stub} />);
    expect(baseElement).toBeTruthy();
  });

  it('should call onChange callback with a valid integer', () => {
    const stub = jest.fn();

    render(<Amount onChange={stub} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '123,456,789.00' } })
    expect(stub).toBeCalledWith(123456789);
  });

  it('should call onChange callback with a valid float', () => {
    const stub = jest.fn();

    render(<Amount onChange={stub} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '123,456,789.12' } })
    expect(stub).toBeCalledWith(123456789.12);
  });
});
