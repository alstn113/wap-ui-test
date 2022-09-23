import React from 'react';
import { ThemeProvider, ThemeProviderProps } from '@emotion/react';
import lightTheme from './light-theme';

interface Props extends ThemeProviderProps {}

const WapUIProvider = ({ children }: Props) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

export default WapUIProvider;
