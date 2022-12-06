import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    html, body, .page, .sb-show-main.sb-main-padded {
      margin:0;
      padding:0
    }
    .page{
      max-width: 100%;
    }
  }
`