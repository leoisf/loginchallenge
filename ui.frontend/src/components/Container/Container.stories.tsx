import React  from "react"

import { storiesOf } from "@storybook/react"

import Container from "./Container.styled"

storiesOf('LoginChallenge|Container|Display', module).add('default', () => {
    return<Container>Block</Container>
})

storiesOf('LoginChallenge|Container|Display', module).add('displayFlex', () => {
    return<Container displayFlex>Flex</Container>
})

storiesOf('LoginChallenge|Container|Aling', module).add('aling|center', () => {
    return<Container displayFlex justifyContent='center'> Center </Container>
})

storiesOf('LoginChallenge|Container|Aling', module).add('aling|rigth', () => {
    return<Container displayFlex justifyContent='right'> Rigth </Container>
})

storiesOf('LoginChallenge|Container|Aling', module).add('aling|left', () => {
    return<Container displayFlex justifyContent='left'> Left </Container>
})