import React, { DetailedReactHTMLElement, ReactNode } from 'react';
import styled from 'styled-components';
import { spreadNumber, validateSingleChild } from '../../../utils';

type ISpace = {
  name?: string;
  padding?: number | number[];
  margin?: number | number[];
  children: ReactNode;
};

type FinalSpaceProps = ISpace & React.HTMLAttributes<HTMLDivElement>;

const Space = styled(
  ({
    padding,
    margin,
    children,
    ...props
  }: FinalSpaceProps): DetailedReactHTMLElement<any, any> => {
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
