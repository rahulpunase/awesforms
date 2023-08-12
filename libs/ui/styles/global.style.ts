import { createGlobalStyle } from 'styled-components';
import { defaultColors, darkThemeColors } from '../variables';
// import '@radix-ui/themes/styles.css';

const Raleway = '';

const getColorMap = (
  themeColors: Record<string, Record<string, string>>
): string => {
  let wholeStr = '';
  for (const colorMap in themeColors) {
    let mapStr = '';
    for (const color in themeColors[colorMap]) {
      mapStr += `--${colorMap}-${color}: ${themeColors[colorMap][color]};`;
    }
    wholeStr += mapStr;
  }
  return wholeStr;
};

const GlobalStyle = createGlobalStyle`
    :root {
      ${getColorMap(defaultColors)}
    }
    :root[data-theme="dark"] {
        ${getColorMap(darkThemeColors)}
    }
    
    * {
        padding: 0;
        margin  : 0;
        box-sizing: border-box;
    }

    html, body {
      height: 100%;
      #__next {
        height: 100%;
      }
      background-color: var(--background-body);
    }

    html {
      font-size: 10px;
    }
    
    @font-face {
      font-family: 'Raleway';
      src: url(${Raleway}) format('woff2'),
          url(${Raleway}) format('woff');
    }
`;

export default GlobalStyle;
