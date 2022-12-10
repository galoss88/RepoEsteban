import Form from '..';
import { fireEvent, render, screen } from '../../../../../utils/testing/reduxRender';

describe('Form', () => {
  test('render', () => {
    const container = render(<Form />);
    expect(container).toBeDefined();
  });

  test('validation', () => {
    render(<Form />);
    const error = screen.queryByTestId('error-message');
    expect(error).not.toBeInTheDocument();
    const btn = screen.getByTestId('btn');
    fireEvent.click(btn);
    const errorMsg = screen.getByTestId('error-message');
    expect(errorMsg).toBeInTheDocument();
    const name = screen.getByTestId('input-name');
    fireEvent.change(name, { target: { value: 'nameItem' } });
    const price = screen.getByTestId('input-price');
    fireEvent.change(price, { target: { value: 1000 } });
    expect(price).toHaveValue('1000');
    fireEvent.click(btn);
    expect(errorMsg).not.toBeInTheDocument();
  });
});
