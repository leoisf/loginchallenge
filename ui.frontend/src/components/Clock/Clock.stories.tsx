

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Clock  from './Clock'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LoginChallenge/Clock',
  component: Clock,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Clock>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />;

export const Default = Clock.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

