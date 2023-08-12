import React, { InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';
import View from '../../Layout/View';

interface StyledInputFieldProps {
  error?: boolean;
}

interface FinalInputFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    StyledInputFieldProps {
  component?: string;
}

const StyledInputField = styled(
  ({ component = 'input', ...props }: FinalInputFieldProps) =>
    React.createElement(component, props)
)<StyledInputFieldProps>`
  padding: 8px;
  border-radius: ${({ theme }) => theme.radius.normal};
  border: none;
  border: ${({ theme }) => theme.borders.main};
  transition: ${({ theme }) => theme.transitions.all};
  outline: none;
  color: ${({ theme }) => theme.getColor('textMain')};
  box-shadow: ${({ theme }) => theme.shadows.elvt4};
  &:hover {
    border: ${({ theme }) => theme.borders.primary};
  }
  &:focus,
  &:focus-visible {
    box-shadow: ${({ theme }) => theme.shadows.elvt3};
    border: ${({ theme }) => theme.borders.primary};
  }
`;

const TextField = ({ component, ...props }: FinalInputFieldProps) => {
  return (
    <View>
      <StyledInputField component={component} {...props} />
    </View>
  );
};

export default TextField;
