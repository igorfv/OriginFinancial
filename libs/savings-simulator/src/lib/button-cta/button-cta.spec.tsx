import { render, screen, fireEvent } from '@testing-library/react';

import ButtonCta from './button-cta';

describe('ButtonCta', () => {
  it('should render successfully', () => {
    const stub = jest.fn();

    const { baseElement } = render(<ButtonCta onClick={stub}>Test</ButtonCta>);
    expect(baseElement).toBeTruthy();
  });

  it('should handle clicks', () => {
    const stub = jest.fn();

    render(<ButtonCta onClick={stub}>Test</ButtonCta>);

    fireEvent(screen.getByRole('button'), new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))

    expect(stub).toBeCalled();
  });
});
