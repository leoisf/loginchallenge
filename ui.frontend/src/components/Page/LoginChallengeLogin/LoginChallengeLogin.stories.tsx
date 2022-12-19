import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  LoginChallengeLogin  from './LoginChallengeLogin'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LoginChallenge/LoginChallengeLogin',
  component: LoginChallengeLogin,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof LoginChallengeLogin>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginChallengeLogin> = (args) => <LoginChallengeLogin {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};

