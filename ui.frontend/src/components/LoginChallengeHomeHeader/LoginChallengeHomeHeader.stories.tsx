

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  LoginChallengeHomeHeader  from './LoginChallengeHomeHeader'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LoginChallenge/LoginChallengeHomeHeader',
  component: LoginChallengeHomeHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof LoginChallengeHomeHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginChallengeHomeHeader> = (args) => <LoginChallengeHomeHeader {...args} />;

export const HomeHeader = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HomeHeader.args = {
};

