import React, { DetailedReactHTMLElement, ReactNode } from 'react';
import styled from 'styled-components';
import { spreadNumber, validateSingleChild } from '../../../utils';

type ISpace = {
  name?: string;
  padding?: number | number[];
  margin?: number | number[];
  children: ReactNode;
};

const Space = styled(
  ({
    padding,
    margin,
    children,
    ...props
  }: ISpace): DetailedReactHTMLElement<any, any> => {
    validateSingleChild(children, 'Space');
    return React.cloneElement(
      children as DetailedReactHTMLElement<any, any>,
      props
    );
  }
)`
  padding: ${(props) => (props.padding ? spreadNumber(props.padding) : '')};
  margin: ${(props) => (props.margin ? spreadNumber(props.margin) : '')};
`;

export default Space;
