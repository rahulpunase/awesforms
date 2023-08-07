import React, { ReactNode } from 'react';
import { EColors, TFontSize, TFontWeights } from '../../variables';
import { styled } from 'styled-components';

interface IText {
  children: ReactNode;
  fontSize?: TFontSize;
  fontWeight?: TFontWeights;
  component?: string;
  fontFamily?: string;
  color?: keyof typeof EColors;
}

const Text = styled(
  ({
    component = 'div',
    children,
    fontSize,
    fontFamily,
    fontWeight,
    color,
    ...props
  }: IText) => React.createElement(component, props, children)
)<IText>`
  font-size: ${({ theme, fontSize = 'normal' }) => theme.fontSizes[fontSize]};
  font-family: ${({ fontFamily, theme }) =>
    fontFamily ? fontFamily : theme.fontFamilies.main};
  font-weight: ${({ theme, fontWeight = 'normal' }) =>
    theme.fontWeights[fontWeight]};
  color: ${({ theme, color = 'text' }) => theme.getColor(color)};
  transition: ${({ theme }) => theme.transitions.all};
`;

export default Text;
