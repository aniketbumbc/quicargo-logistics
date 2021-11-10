import { render, screen } from '@testing-library/react';
import { IMAGE_LOGO } from '../../../constant/constant';
import SideNavBar from '../SideNavBar';

describe('SideNavBar', () => {
  test('should render correct image logo on screen', () => {
    render(<SideNavBar />);
    const logo = screen.getByRole('img');

    expect(logo).toHaveAttribute('src', IMAGE_LOGO);
    expect(logo).toHaveAttribute('alt', 'Quicargo');
  });

  test('Should render nav item correct length', () => {
    render(<SideNavBar />);
    const navItems = screen.getAllByRole('listitem');

    expect(navItems.length).toBe(3);
  });

  test('Should not render nav items incorrect', () => {
    render(<SideNavBar />);
    const navItems = screen.getAllByRole('listitem');

    expect(navItems.length).not.toBe(2);
  });

  test('Should render nav item correct name', () => {
    render(<SideNavBar />);
    const navItems = screen.getAllByRole('listitem');
    const navItemsName = navItems.map((item) => item.textContent);

    expect(navItemsName).toEqual([
      ' New Delivery',
      ' My Deliveries4',
      ' History2',
    ]);
  });

  test('Should have render correct font-awesome icons', () => {
    const { container } = render(<SideNavBar />);

    expect(container.getElementsByClassName('fas fa-plus').length).toBe(1);
    expect(
      container.getElementsByClassName('fas fa-shipping-fast').length
    ).toBe(1);
    expect(container.getElementsByClassName('fas fa-history').length).toBe(1);
  });
});
