import React, { ReactNode } from 'react';

import Icon from '../Icon';
import View from '../Layout/View';
import Text from '../Text';

import { ButtonHTMLAttributes } from 'react';
import { EColors } from '../../variables';
import { css, styled } from 'styled-components';

export enum PossibleButtonVariants {
  text = 'text',
  filled = 'filled',
  outlined = 'outlined',
}

export enum PossibleShapes {
  circle = 'circle',
  rect = 'rect',
}
export enum PossibleComponents {
  a = 'a',
  button = 'button',
}

export enum PossibleColor {
  primary = EColors.primary,
  secondary = EColors.secondary,
  error = EColors.error,
}

type ShapeKey = keyof typeof PossibleShapes;

export interface CustomButtonProps {
  variant: keyof typeof PossibleButtonVariants;
  disabled?: boolean;
  icon?: string;
  shape?: ShapeKey;
  component?: string;
  href?: string;
}

export interface ExtraButtonProps {
  children?: ReactNode;
  label?: string;
}

interface FinalDefaultButtonProps
  extends CustomButtonProps,
    ButtonHTMLAttributes<HTMLButtonElement>,
    ExtraButtonProps {
  color?: keyof typeof PossibleColor;
}

const renderChildren = (
  icon?: string,
  label?: string,
  children?: ReactNode,
  shape?: ShapeKey
) => {
  if (shape === 'circle' && !!icon) {
    return <Icon icon={icon} />;
  }
  if (shape !== 'circle' && children) {
    <View>{children}</View>;
  }
  if (children && !label) {
    return <View>{children}</View>;
  }
  return <Text color="_inherit">{label}</Text>;
};

const Button = styled(
  ({
    icon,
    label,
    children,
    shape,
    component = 'button',
    ...props
  }: FinalDefaultButtonProps) =>
    React.createElement(
      component,
      props,
      renderChildren(icon, label, children, shape)
    )
)`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.normal};
  padding: 8px 24px;
  transition: 0.25s background ease-in-out;

  ${({ theme, color = 'primary', variant }) =>
    variant === 'filled' &&
    css`
      background: ${theme.getColor(color)};
      border: 1px solid ${theme.getColor(color)};
      color: ${theme.getColor('textLight')};

      &:hover {
        background: ${theme.getColor(
          (color + 'Hover') as keyof typeof EColors
        )};
        box-shadow: ${theme.shadows.elvt3};
        color: ${theme.getColor('textLight')};
      }
    `}

  ${({ theme, color = 'primary', variant }) =>
    variant === 'text' &&
    css`
      background: var(--white);
      border: 1px solid var(--white);
      color: ${theme.getColor(color)};

      &:hover {
        background: ${theme.getColor(
          (color + 'Light') as keyof typeof EColors
        )};
      }
    `}

  ${({ theme, color = 'primary', variant }) =>
    variant === 'outlined' &&
    css`
      background: var(--white);
      border: 1px solid ${theme.getColor(color)};
      color: ${theme.getColor(color)};
      &:hover {
        background: ${theme.getColor(color)};
        color: ${theme.getColor('white')};
        box-shadow: ${theme.shadows.elvt3};
      }
    `}

  ${({ theme, disabled }) =>
    disabled &&
    css`
      &:disabled {
        background: var(--disableBackground);
        border: ${theme.borders.main};
        color: ${theme.getColor('textDisabled')};
        cursor: not-allowed;
        &:hover {
          box-shadow: unset;
        }
      }
    `};

  ${({ shape = 'rect' }) =>
    shape === 'circle' &&
    css`
      height: 35px;
      width: 35px;
      border-radius: 50%;
      padding: 8px;
    `}
`;

export default Button;
