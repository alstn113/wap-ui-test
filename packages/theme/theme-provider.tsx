import React from 'react';
import { ThemeProvider, ThemeProviderProps } from '@emotion/react';
import lightTheme from './light-theme';
import GlobalStyle from './global-style';

interface Props extends ThemeProviderProps {}

const WapUIProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default WapUIProvider;
