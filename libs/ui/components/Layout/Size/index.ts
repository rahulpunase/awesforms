import React, { DetailedReactHTMLElement, ReactNode } from 'react';
import styled from 'styled-components';
import { validateSingleChild } from '../../../utils';

type ISize = {
  name?: string;
  height?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
  children: ReactNode;
};

const Size = styled(
  ({
    height,
    width,
    children,
    ...props
  }: ISize): DetailedReactHTMLElement<any, any> => {
    validateSingleChild(children, 'ISize');
    return React.cloneElement(
      children as DetailedReactHTMLElement<any, any>,
      props
    );
  }
)`
  min-width: ${({ minWidth }) => (minWidth ? `${minWidth}` : '')};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}` : '')};
  width: ${({ width }) => (width ? `${width}` : '')};
  height: ${({ height }) => (height ? `${height}` : '')};
  min-height: ${({ minHeight }) => (minHeight ? `${minHeight}` : '')};
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}` : '')};
`;

export default Size;
