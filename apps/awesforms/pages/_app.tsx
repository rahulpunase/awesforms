import React from 'react';
import type { AppProps } from 'next/app';
import '@org/ui/styles/to-import.scss';

import { Raleway } from 'next/font/google';

import { CustomThemeProvider, GlobalStyles } from '@org/ui/styles';
import { Provider } from 'react-redux';
import store from '../store';

const ralewayFont = Raleway({
  preload: false,
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  fallback: ['system-ui', 'arial'],
  variable: '--primary-font',
  subsets: ['latin'],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <CustomThemeProvider externalFont={ralewayFont.style.fontFamily}>
        <Component {...pageProps} />
      </CustomThemeProvider>
    </Provider>
  );
};

export default App;
