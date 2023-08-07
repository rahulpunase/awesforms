import React, { ReactNode } from 'react';
import { IFlex } from '../components/Layout/Flex';

export const getFlexProps = (props: IFlex) => {
  if (!props.flex) return '';
  if (!isNaN(parseFloat(props.flex)) && props.flex) {
    return `${props.flex} auto`;
  } else if (props.flex) {
    return props.flex;
  }
};

export const validateSingleChild = (children: ReactNode, component: string) => {
  if (React.Children.toArray(children).length !== 1) {
    throw new Error(`Expected a single child for ${component} component`);
  }
};

export const spreadNumber = (property: number | number[]) => {
  if (Array.isArray(property)) {
    return property.map((_) => _ + 'px').join(' ');
  }
  return property + 'px';
};

export const isMobileScreen = (): boolean =>
  window.matchMedia('(min-width: 600px)').matches;
