import styled, { createGlobalStyle } from "styled-components";
import PropTypes from 'prop-types'
import { FindAllByText } from "@testing-library/react";


interface ContainerProps{
    displayFlex?: boolean
    justifyContent?: string;
}

const Container = styled.div<ContainerProps>`
  display: ${props => props.displayFlex ? 'flex' : 'block'};
  justify-content: ${ props => props.justifyContent };
 
`;

Container.propTypes = {
    displayFlex: PropTypes.bool
}
Container.defaultProps = {
    displayFlex: false
}

export default Container