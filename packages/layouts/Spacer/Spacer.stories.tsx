import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spacer, Props } from './Spacer';
import React from 'react';

export default {
  title: 'Layout/Spacer',
  component: Spacer,
} as ComponentMeta<typeof Spacer>;

const Template: ComponentStory<typeof Spacer> = (args: Props) => {
  return <Spacer {...args} />;
};

export const Default = Template.bind({});

Default.args = {};
