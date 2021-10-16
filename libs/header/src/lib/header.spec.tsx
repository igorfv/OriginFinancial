import { render, screen } from '@testing-library/react'

import Header from './header'

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header />)
    expect(baseElement).toBeTruthy()
  })

  it('should have a readable logo', () => {
    render(<Header />);
    expect(screen.getByText('origin')).toBeTruthy()
  })
})
