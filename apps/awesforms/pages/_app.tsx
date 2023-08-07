import React from 'react';
import type { AppProps } from 'next/app';

import { Raleway } from 'next/font/google';

import { CustomThemeProvider, GlobalStyles } from '@org/ui/styles';

const ralewayFont = Raleway({
  preload: false,
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  fallback: ['system-ui', 'arial'],
  variable: '--primary-font',
  subsets: ['latin'],
});

console.log({ ralewayFont });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <CustomThemeProvider externalFont={ralewayFont.style.fontFamily}>
        <Component {...pageProps} />
      </CustomThemeProvider>
    </>
  );
};

export default App;
