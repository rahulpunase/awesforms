import { GlobalStyles } from '../styles';
import { ThemeProvider } from 'styled-components';
import { getThemeArguments } from '../styles/theme.provider';
import { Preview } from '@storybook/react';
import Flex from '../components/Layout/Flex';
import Size from '../components/Layout/Size';
import StyledView from '../components/Layout/StyledView';

import '../styles/to-import.scss';
import StoryBookGlobalStyle from './storybook.style';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={getThemeArguments()}>
        <GlobalStyles />
        <StoryBookGlobalStyle />
        <Size height="100%">
          <Flex justifyContent="center" alignItems="center">
            <StyledView background="bodyBackground">
              <Story />
            </StyledView>
          </Flex>
        </Size>
      </ThemeProvider>
    ),
  ],
};

export default preview;
