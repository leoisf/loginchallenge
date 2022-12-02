

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  SearchPage  from './SearchPage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LoginChallenge/SearchPage',
  component: SearchPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof SearchPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchPage> = (args) => <SearchPage {...args} />;

export const Default = SearchPage.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

