import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('should renders with a className equal to the main-container', () => {
    const { container } = render(<App />);

    expect(container.getElementsByClassName('main-container').length).toBe(1);
  });

  test('Shoud not render with incorrect className', () => {
    const { container } = render(<App />);

    expect(container.getElementsByClassName('main').length).toBe(0);
  });
});
