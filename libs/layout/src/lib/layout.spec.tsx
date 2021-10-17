import { render, screen } from '@testing-library/react';

import Layout from './layout';

describe('Layout', () => {
  it('should render successfully', () => {
    const pageProps = {
      meta: {
        title: 'Test',
        description: 'Test description',
      }
    };

    const Component = () => <div>Test Component</div>;

    const router = {} as any;

    const { baseElement } = render(<Layout pageProps={pageProps} Component={Component} router={router} />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByText('Test Component')).toBeTruthy();
  });
});
