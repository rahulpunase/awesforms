import Icon from '../../Icon';
import View from '../../Layout/View';
import { ChangeEvent } from 'react';
import Flex from '../../Layout/Flex';
import Space from '../../Layout/Space';
import Text from '../../Text';
import StyledView from '../../Layout/StyledView';
import Size from '../../Layout/Size';
import { css, styled } from 'styled-components';
import { EBorders, EColors } from '../../../variables';

interface CheckBoxBorderedProps {
  disabled?: boolean;
}

interface CheckboxProps extends CheckBoxBorderedProps {
  name: string;
  label?: string;
  defaultValue?: boolean;
  indeterminate?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const getBackgroundColor = (
  defaultValue: boolean,
  disabled: boolean
): keyof typeof EColors => {
  if (disabled) return 'disabled';
  if (defaultValue) return 'primary';
  return '_blank';
};

const geBorderColor = (
  defaultValue: boolean,
  disabled: boolean
): keyof typeof EBorders => {
  if (disabled) return 'main';
  if (defaultValue) return 'primary';
  return 'main';
};

const CheckBoxBordered = styled(StyledView)<CheckBoxBorderedProps>`
  ${({ disabled, theme }) =>
    !disabled &&
    css`
      &:hover {
        ${StyledView} {
          border: ${theme.borders.primary};
        }
      }
    `}
`;

const Checkbox = ({
  name,
  label,
  defaultValue = false,
  disabled = false,
  indeterminate = false,
  onChange,
  ...props
}: CheckboxProps) => {
  return (
    <View name="unit-Checkbox">
      <CheckBoxBordered
        component="label"
        cursor={disabled ? 'not-allowed' : 'pointer'}
        disabled={disabled}
      >
        <input
          checked={defaultValue}
          type="checkbox"
          name={name}
          onChange={onChange}
          hidden
          disabled={disabled}
          {...props}
        />
        <Flex flexDirection="row" alignItems="center">
          <View>
            <Flex justifyContent="center" alignItems="center">
              <Size height="20px" width="20px">
                <StyledView
                  border={geBorderColor(defaultValue, disabled)}
                  borderRadius={6}
                  background={getBackgroundColor(defaultValue, disabled)}
                >
                  {defaultValue ? (
                    <Text color="white">
                      <Icon
                        icon={indeterminate ? 'fa fa-minus' : 'fa fa-check'}
                      />
                    </Text>
                  ) : null}
                </StyledView>
              </Size>
            </Flex>
            {label ? (
              <Space margin={[0, 0, 0, 8]}>
                <Text color={disabled ? 'disabled' : 'text'}>{label}</Text>
              </Space>
            ) : null}
          </View>
        </Flex>
      </CheckBoxBordered>
    </View>
  );
};

export default Checkbox;
