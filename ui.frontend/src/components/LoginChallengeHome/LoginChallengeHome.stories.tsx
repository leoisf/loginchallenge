import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  LoginChallengeHome  from './LoginChallengeHome'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LoginChallenge/LoginChallengeHome',
  component: LoginChallengeHome,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof LoginChallengeHome>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginChallengeHome> = (args) => <LoginChallengeHome {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};

