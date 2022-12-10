/* istanbul ignore file */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal, { defaultProps } from '..';

export default {
  title: 'Modals',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>
    <p>Foo</p>
  </Modal>
);

export const ModalPrimary = Template.bind({});

ModalPrimary.args = {
  ...defaultProps,
};
