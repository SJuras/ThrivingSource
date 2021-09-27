import {createGlobalStyle} from 'styled-components';

export const LightTheme = {
  body: "#fff",
  fontColor: "#242526"
};

export const DarkTheme = {
  body: "#242526",
  fontColor: "#fff"
};


export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
  }
`;
