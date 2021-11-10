import { fireEvent, render, screen } from '@testing-library/react';
import Delivery from '../Delivery';
import userEvent from '@testing-library/user-event';

describe('Delivery', () => {
  test('Should present correct Pickup and Delivery label on UI', () => {
    render(<Delivery />);

    const pickupLabel = screen.getByText('Pickup');
    const deliveryLabel = screen.getByText('Delivery');

    expect(pickupLabel).toBeInTheDocument();
    expect(deliveryLabel).toBeInTheDocument();
  });

  test('Should not present incorrect label on UI', () => {
    render(<Delivery />);

    const pickupLabel = screen.queryByText('pickup');

    expect(pickupLabel).toBeNull();
  });
  test('should correct initial set default option for select', () => {
    const { getByTestId } = render(<Delivery />);

    expect(getByTestId('form')).toHaveFormValues({ pickup: '' });
    expect(getByTestId('form')).toHaveFormValues({ delivery: '' });
  });

  test('should display correct countries options for select', async () => {
    const { getByTestId } = render(<Delivery />);
    const dropdown = getByTestId('pickup-dropdown');

    expect(dropdown.children[0].textContent).toEqual('Please select country');
    expect(dropdown.children[1].textContent).toEqual('Netherland');
    expect(dropdown.children[2].textContent).toEqual('Germany');
  });

  test('should select pickup option correctly and form has correct value', () => {
    render(<Delivery />);

    userEvent.selectOptions(
      screen.getByTestId('pickup-dropdown'),
      screen.getByTestId('netherland-option')
    );

    expect(screen.getByTestId('netherland-option').textContent).toEqual(
      'Netherland'
    );
    expect(screen.getByTestId('form')).toHaveFormValues({
      pickup: 'netherland',
    });
  });

  test('should not reflected incorrect form value', () => {
    render(<Delivery />);

    userEvent.selectOptions(
      screen.getByTestId('pickup-dropdown'),
      screen.getByTestId('germany-option')
    );

    expect(screen.getByTestId('germany-option').textContent).toEqual('Germany');
    expect(screen.getByTestId('form')).not.toHaveFormValues({
      pickup: 'netherland',
    });
  });

  test('should render pickup address input correctly', () => {
    render(<Delivery />);

    const inputAddressEle = screen.getByPlaceholderText(/Address Pickup/i);

    expect(inputAddressEle).toBeInTheDocument();
  });

  test('should select delivery option correctly and form has correct value', () => {
    render(<Delivery />);

    userEvent.selectOptions(
      screen.getByTestId('delivery-dropdown'),
      screen.getByTestId('germany-delivery-option')
    );

    expect(screen.getByTestId('germany-delivery-option').textContent).toEqual(
      'Germany'
    );
    expect(screen.getByTestId('form')).toHaveFormValues({
      delivery: 'germany',
    });
  });

  test('should check paper goods by default', () => {
    render(<Delivery />);

    const paperRadioBtn = screen.getByLabelText('Paper') as HTMLInputElement;

    expect(paperRadioBtn).toBeInTheDocument();
    expect(paperRadioBtn.checked).toEqual(true);
  });

  test('should check paper goods by default not other goods check by default', () => {
    render(<Delivery />);

    const plasticRadioBtn = screen.getByLabelText(
      'Plastic'
    ) as HTMLInputElement;

    expect(plasticRadioBtn.checked).toEqual(false);
  });

  test('should check plastic goods checked when user click on plastic other unchecked', () => {
    render(<Delivery />);

    const plasticRadioBtn = screen.getByLabelText(
      'Plastic'
    ) as HTMLInputElement;

    const paperRadioBtn = screen.getByLabelText('Paper') as HTMLInputElement;

    userEvent.click(plasticRadioBtn);

    expect(plasticRadioBtn.checked).toEqual(true);
    expect(paperRadioBtn.checked).toEqual(false);

    userEvent.click(paperRadioBtn);
    expect(plasticRadioBtn.checked).toEqual(false);
    expect(paperRadioBtn.checked).toEqual(true);
  });

  test('should correct initial set default option for a volume pallet', () => {
    const { getByTestId } = render(<Delivery />);
    expect(getByTestId('form')).toHaveFormValues({ freightType: 'pallet' });
  });

  test('should select a volume option correctly and set form value', () => {
    render(<Delivery />);

    userEvent.selectOptions(
      screen.getByTestId('volume-dropdown'),
      screen.getByTestId('container')
    );

    expect(screen.getByTestId('container').textContent).toEqual('Container');
    expect(screen.getByTestId('form')).toHaveFormValues({
      freightType: 'container',
    });
    expect(screen.getByTestId('form')).not.toHaveFormValues({
      freightType: 'pallet',
    });
  });

  test('should have a default volume count', () => {
    render(<Delivery />);
    const inputEleCount = screen.getByLabelText('Count');

    expect(inputEleCount).toBeInTheDocument();
    expect(screen.getByTestId('form')).toHaveFormValues({
      volumeCount: 0,
    });
  });

  test('should have change correct volume count when changed', () => {
    render(<Delivery />);
    const inputEleCount = screen.getByLabelText('Count');

    fireEvent.change(inputEleCount, { target: { value: '123' } });

    expect(screen.getByTestId('form')).toHaveFormValues({
      volumeCount: 123,
    });
  });

  test('should have set correct volume Length,width and Height when changed', () => {
    render(<Delivery />);
    const inputEleLength = screen.getByLabelText('Length(cm)');
    const inputEleWidth = screen.getByLabelText('Width(cm)');
    const inputEleHeight = screen.getByLabelText('Height(cm)');

    fireEvent.change(inputEleLength, { target: { value: '200' } });
    expect(screen.getByTestId('form')).toHaveFormValues({
      length: 200,
    });
    fireEvent.change(inputEleWidth, { target: { value: '120' } });
    expect(screen.getByTestId('form')).toHaveFormValues({
      width: 120,
    });
    fireEvent.change(inputEleHeight, { target: { value: '100' } });
    expect(screen.getByTestId('form')).toHaveFormValues({
      height: 100,
    });
  });

  test('should have a set pickup date correctly when changed', () => {
    const { getByTestId } = render(<Delivery />);
    const datePicker = getByTestId('pickup-date-picker') as HTMLInputElement;

    fireEvent.click(datePicker);
    fireEvent.change(datePicker, { target: { value: '2020-10-29' } });

    expect(datePicker.value).toBe('2020-10-29');
    expect(screen.getByTestId('form')).toHaveFormValues({
      pickupDate: '2020-10-29',
    });
  });

  test('should select pickup time correctly', () => {
    render(<Delivery />);
    const timePicker = screen.getByLabelText(/Time/i) as HTMLInputElement;

    userEvent.type(timePicker, '07:58');

    expect(timePicker.value).toBe('07:58');
    expect(screen.getByTestId('form')).toHaveFormValues({
      pickupTime: '07:58',
    });
  });

  test('should have a set delivery date correctly when changed', () => {
    const { getByTestId } = render(<Delivery />);
    const datePicker = getByTestId('delivery-date-picker') as HTMLInputElement;

    fireEvent.click(datePicker);
    fireEvent.change(datePicker, { target: { value: '2021-11-29' } });

    expect(datePicker.value).toBe('2021-11-29');
    expect(screen.getByTestId('form')).toHaveFormValues({
      deliveryDate: '2021-11-29',
    });
  });

  test('should select delivery time correctly', () => {
    render(<Delivery />);
    const timePicker = screen.getByTestId(
      'delivery-time-picker'
    ) as HTMLInputElement;

    userEvent.type(timePicker, '10:00');
    expect(timePicker.value).toBe('10:00');
    expect(screen.getByTestId('form')).toHaveFormValues({
      deliveryTime: '10:00',
    });
  });
});
