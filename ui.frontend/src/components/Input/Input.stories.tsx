

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Input  from './Input'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LoginChallenge/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Input.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
//Weather.args = {
//};
