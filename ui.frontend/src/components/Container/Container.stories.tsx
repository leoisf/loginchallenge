// import React  from "react"

// import { storiesOf } from "@storybook/react"

// storiesOf('LoginChallenge|Container|Display', module).add('default', () => {
//     return<Container>Block</Container>
// })

// storiesOf('LoginChallenge|Container|Display', module).add('displayFlex', () => {
//     return<Container displayFlex>Flex</Container>
// })

// storiesOf('LoginChallenge|Container|Aling', module).add('aling|center', () => {
//     return<Container displayFlex justifyContent='center'> Center </Container>
// })

// storiesOf('LoginChallenge|Container|Aling', module).add('aling|rigth', () => {
//     return<Container displayFlex justifyContent='right'> Rigth </Container>
// })

// storiesOf('LoginChallenge|Container|Aling', module).add('aling|left', () => {
//     return<Container displayFlex justifyContent='left'> Left </Container>
// })


import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Container } from './Container';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LoginChallenge/Container',
  component: Container,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Container>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Flex = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Flex.args = {
  flex: true,
};

export const Block = Template.bind({});
Block.args = {
    flex: false,
};
export const Left = Template.bind({});
Left.args = {
  justify_content: 'left',
};
export const Center = Template.bind({});
Center.args = {
  justify_content: 'center',
};
export const Rigth = Template.bind({});
Rigth.args = {
  justify_content: 'right',
};