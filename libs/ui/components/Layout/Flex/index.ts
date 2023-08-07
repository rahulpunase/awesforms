import React, { DetailedReactHTMLElement, ReactNode } from 'react';
import styled from 'styled-components';
import { getFlexProps, validateSingleChild } from '../../../utils';

export type IFlex = {
  name?: string;
  alignContent?: string;
  alignItems?: string;
  alignSelf?: string;
  display?: string;
  flex?: string;
  flexBasis?: string;
  flexDirection?: string;
  flexGrow?: string;
  flexShrink?: string;
  flexWrap?: string;
  justifyContent?: string;
  order?: string;
  children: ReactNode;
  gap?: number;
};

const Flex = styled(
  ({
    alignContent,
    alignItems,
    alignSelf,
    display,
    flex,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    justifyContent,
    order,
    children,
    ...props
  }: IFlex): DetailedReactHTMLElement<any, any> => {
    validateSingleChild(children, 'Flex');
    return React.cloneElement(
      children as DetailedReactHTMLElement<any, any>,
      props
    );
  }
)`
  align-content: ${(props) => (props.alignContent ? props.alignContent : '')};
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : '')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : '')};
  display: ${(props) => (props.display ? props.display : 'flex')};
  flex: ${(props) => getFlexProps(props)};
  flex-basis: ${(props) => (props.flexBasis ? props.flexBasis : '')};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  flex-grow: ${(props) => (props.flexGrow ? props.flexGrow : '')};
  flex-shrink: ${(props) => (props.flexShrink ? props.flexShrink : '')};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : '')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : ''};
  order: ${(props) => (props.order ? props.order : '')};
  gap: ${(props) => (props.gap ? props.gap : '')};
`;

export default Flex;
