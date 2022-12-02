

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  LoginChallengeHomeFooter  from './LoginChallengeHomeFooter'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LoginChallenge/LoginChallengeHomeFooter',
  component: LoginChallengeHomeFooter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof LoginChallengeHomeFooter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginChallengeHomeFooter> = (args) => <LoginChallengeHomeFooter {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};

