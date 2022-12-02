

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  LoginChallengeGitUserPage  from './LoginChallengeGitUserPage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LoginChallenge/LoginChallengeGitUserPage',
  component: LoginChallengeGitUserPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof LoginChallengeGitUserPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginChallengeGitUserPage> = (args) => <LoginChallengeGitUserPage {...args} />;

export const loginChallengeGitUserPage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
loginChallengeGitUserPage.args = {
};

