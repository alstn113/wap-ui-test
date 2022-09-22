import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card, { Props } from './Card';
import React from 'react';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: Props) => (
  <Card {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: 'Default',
};
