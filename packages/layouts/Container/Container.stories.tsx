import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container, Props } from './Container';
import React from 'react';

export default {
  title: 'Layouts/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args: Props) => (
  <Container {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: 'Default',
};
