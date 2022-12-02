

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  GitUsersSearch  from './GitUsersSearch'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LoginChallenge/GitUsersSearch',
  component: GitUsersSearch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof GitUsersSearch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GitUsersSearch> = (args) => <GitUsersSearch {...args} />;

export const Default = GitUsersSearch.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
//Weather.args = {
//};

