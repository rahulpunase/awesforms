import { createGlobalStyle } from 'styled-components';

const StoryBookGlobalStyle = createGlobalStyle`
    html {
        height: 100%;
        background: ${({ theme }) => theme.getColor('backgroundBody')};
        .sb-main-padded.sb-show-main {
            #storybook-root {
                height: 100%;
            }
        }
    }
    
`;

export default StoryBookGlobalStyle;
