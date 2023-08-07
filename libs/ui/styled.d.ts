import 'styled-components';
import {
  EBorders,
  EColors,
  EFontSize,
  EFontWeights,
  ERadius,
  EShadows,
  ETransition,
} from './variables';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof EColors;

    fontSizes: typeof EFontSize;
    borders: typeof EBorders;
    fontFamilies: {
      main: string;
    };
    fontWeights: typeof EFontWeights;
    shadows: typeof EShadows;
    transitions: typeof ETransition;
    radius: typeof ERadius;
    getColor: (color: keyof typeof EColors) => EColors;
  }
}
