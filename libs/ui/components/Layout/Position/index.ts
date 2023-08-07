import React, { DetailedReactHTMLElement, ReactNode } from 'react';
import styled from 'styled-components';
import { validateSingleChild } from '../../../utils';

type IPosition = {
  name?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  children: ReactNode;
};

const Position = styled(
  ({
    position,
    top,
    bottom,
    left,
    right,
    children,
    ...props
  }: IPosition): DetailedReactHTMLElement<any, any> => {
    validateSingleChild(children, 'IPosition');
    return React.cloneElement(
      children as DetailedReactHTMLElement<any, any>,
      props
    );
  }
)`
  position: ${({ position }) => (position ? position : '')};
  top: ${({ top }) => (top ? top : '')};
  left: ${({ left }) => (left ? left : '')};
  right: ${({ right }) => (right ? right : '')};
  bottom: ${({ bottom }) => (bottom ? bottom : '')};
`;

export default Position;
