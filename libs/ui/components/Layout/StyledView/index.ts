import { EBorders, EColors, EShadows } from 'libs/ui/variables';
import { spreadNumber } from '../../../utils';
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type Border = string;

type IStyledView = {
  name?: string;
  component?: string;
  background?: keyof typeof EColors | null;
  border?: keyof typeof EBorders;
  borderRadius?: number | number[];
  borderBottom?: keyof typeof EBorders;
  borderTop?: keyof typeof EBorders;
  borderLeft?: keyof typeof EBorders;
  borderRight?: keyof typeof EBorders;
  boxShadow?: keyof typeof EShadows;
  cursor?: string;

  onHoverShadow?: boolean;

  children: ReactNode;
};

const StyledView = styled(
  ({
    component = 'div',
    children,
    background,
    border,
    borderRadius,
    borderBottom,
    boxShadow,
    onHoverShadow,
    ...props
  }: IStyledView) => React.createElement(component, props, children)
)`
  box-sizing: border-box;

  background: ${({ background, theme }) =>
    background ? theme.getColor(background) : ''};

  border: ${({ border, theme }) => (border ? theme.borders[border] : '')};

  border-radius: ${({ borderRadius }) =>
    borderRadius ? spreadNumber(borderRadius) : ''};

  border-top: ${({ borderTop, theme }) =>
    borderTop ? theme.borders[borderTop] : ''};

  border-right: ${({ borderRight, theme }) =>
    borderRight ? theme.borders[borderRight] : ''};

  border-bottom: ${({ borderBottom, theme }) =>
    borderBottom ? theme.borders[borderBottom] : ''};

  border-top: ${({ borderTop, theme }) =>
    borderTop ? theme.borders[borderTop] : ''};

  box-shadow: ${({ boxShadow, theme }) =>
    boxShadow ? theme.shadows[boxShadow] : ''};

  cursor: ${({ cursor }) => (cursor ? cursor : '')};

  transition: ${({ theme }) => theme.transitions.all};

  ${({ onHoverShadow = false, theme }) =>
    onHoverShadow &&
    css`
      &:hover {
        box-shadow: ${theme.shadows.elvt2};
      }
    `};
`;

export default StyledView;
