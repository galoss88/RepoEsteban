import Icon from '..';
import { render } from '../../../utils/testing/reduxRender';

describe('Render Icon', () => {
  test('Should display an Icon', () => {
    const component = <Icon name="union" />;
    const icon = render(component);
    expect(icon).toBeDefined();
  });
});
