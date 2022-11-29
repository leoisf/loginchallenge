

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Weather  from './Weather'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LoginChallenge/Weather',
  component: Weather,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Weather>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Weather> = (args) => <Weather {...args} />;

export const HomeHeader = Weather.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
//Weather.args = {
//};

