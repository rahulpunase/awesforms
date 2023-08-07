import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import {
  EBorders,
  EColors,
  EFontSize,
  EFontWeights,
  ERadius,
  EShadows,
  ETransition,
} from '../variables';

export const getThemeArguments = (font?: string): DefaultTheme => ({
  colors: EColors,
  fontSizes: EFontSize,
  borders: EBorders,
  fontFamilies: {
    main: font ? font : 'Raleway, sans-serif',
  },
  fontWeights: EFontWeights,
  shadows: EShadows,
  transitions: ETransition,
  radius: ERadius,
  getColor: function (color: keyof typeof EColors) {
    return this.colors[color];
  },
});

export interface IThemeProvider {
  externalFont?: string;
  children: ReactNode;
}

export default function ({ externalFont, children }: IThemeProvider) {
  return (
    <ThemeProvider theme={getThemeArguments(externalFont)}>
      {children}
    </ThemeProvider>
  );
}
