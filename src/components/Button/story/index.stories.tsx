/* istanbul ignore file */
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button, { defaultProps } from '..';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});

DefaultButton.args = {
  ...defaultProps,
  onClick: action('clicked'),
};

export const BlackButton = Template.bind({});

BlackButton.args = {
  size: 'md',
  value: 'Black',
  variant: 'black',
  onClick: action('fetch'),
};

// export const DisabledButton = Template.bind({});

// DisabledButton.args = {
//   ...defaultProps,
//   value: 'Disabled',
//   isDisabled: true,
//   size: 'md',
// };
