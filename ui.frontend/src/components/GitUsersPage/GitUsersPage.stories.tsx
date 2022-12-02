

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  GitUsersPage  from './GitUsersPage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LoginChallenge/GitUsersPage',
  component: GitUsersPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof GitUsersPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GitUsersPage> = (args) => <GitUsersPage {...args} />;

export const Default = GitUsersPage.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
//Weather.args = {
//};

