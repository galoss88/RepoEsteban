import Modal from '..';
import { render, screen, fireEvent, waitFor } from '../../../utils/testing/reduxRender';

describe('Render Modal', () => {
  test('Should display modal', () => {
    const children = 'foo';
    const component = <Modal isOpent={true}>{children}</Modal>;
    render(component);
    const modal = screen.getByTestId('modal-component');
    expect(modal).toBeVisible();
  });

  test('Should not display modal component', () => {
    const children = 'nada';
    const component = (
      <Modal isOpent={false}>
        <p>{children}</p>
      </Modal>
    );
    render(component);
    const modal = screen.getByTestId('modal-component');
    expect(modal).not.toBeVisible();
  });

  test('Should close modal', () => {
    const children = 'foo';
    let isOpent = true;
    const setIsOpent = () => {
      isOpent = !isOpent;
    };
    const component = (
      <Modal setIsOpent={setIsOpent} isOpent={isOpent}>
        {children}
      </Modal>
    );
    render(component);
    const modal = screen.getByTestId('modal-component');
    expect(modal).toBeVisible();

    const closeButton = screen.getByTestId('onclose-icon-modal');
    fireEvent.click(closeButton);
    waitFor(() => {
      expect(modal).not.toBeVisible();
    });
  });
});
