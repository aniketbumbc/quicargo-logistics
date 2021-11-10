import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  test('Should render header item correct length', () => {
    render(<Header />);
    const headersItems = screen.getAllByRole('listitem');

    expect(headersItems.length).toBe(2);
  });

  test('Should render header item name correctly', () => {
    render(<Header />);
    const headersItems = screen.getAllByRole('listitem');
    const headersItemsName = headersItems.map((item) => item.textContent);

    expect(headersItemsName[0]).toEqual('John');
  });

  test('Should have render correct font-awesome icons', () => {
    const { container } = render(<Header />);

    expect(
      container.getElementsByClassName('fas fa-user-circle icon').length
    ).toBe(1);
  });
});
