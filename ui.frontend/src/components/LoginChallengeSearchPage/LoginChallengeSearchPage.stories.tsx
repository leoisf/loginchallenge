

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  LoginChallengeSearchPage  from './LoginChallengeSearchPage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LoginChallenge/LoginChallengeSearchPage',
  component: LoginChallengeSearchPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof LoginChallengeSearchPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginChallengeSearchPage> = (args) => <LoginChallengeSearchPage {...args} />;

export const loginChallengeSearchPage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
loginChallengeSearchPage.args = {
};

