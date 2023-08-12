import * as Tabs from '@radix-ui/react-tabs';
import Button from '../Button';
import { styled } from 'styled-components';
import Space from '../Layout/Space';
import { ReactNode, useState } from 'react';
import View from '../Layout/View';
import Flex from '../Layout/Flex';
import Text from '../Text';
import StyledView from '../Layout/StyledView';

export type TabOption = {
  value: string;
  label: string;
  content: JSX.Element;
};

export type TTabs = {
  options: TabOption[];
  defaultValue: string;
  onTabChange?: (value: string) => void;
};

const StyledContent = ({
  children,
  value,
}: {
  children: ReactNode;
  value: string;
}) => (
  <Tabs.Content value={value}>
    <Space padding={8} margin={[8, 0, 0, 0]}>
      <View>{children}</View>
    </Space>
  </Tabs.Content>
);

const CustomizedButton = styled(Button)`
  padding: 8px 16px;
`;

const Tab = ({ options = [], defaultValue, onTabChange }: TTabs) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <View name="Unit Tab Component">
      <Tabs.Root
        defaultValue={defaultValue}
        onValueChange={(value) => {
          setActiveTab(value);
          if (!onTabChange) return;
          onTabChange(activeTab);
        }}
      >
        <Tabs.List asChild>
          <Flex flexDirection="row" justifyContent="space-between">
            <Space padding={[0, 0, 8, 0]}>
              <StyledView borderBottom="main">
                {options.map((option) => (
                  <Tabs.Trigger key={option.value} asChild value={option.value}>
                    <CustomizedButton variant="text">
                      <Text
                        fontSize="normal"
                        fontWeight={
                          activeTab === option.value ? 'bold' : 'normal'
                        }
                      >
                        {option.label}
                      </Text>
                    </CustomizedButton>
                  </Tabs.Trigger>
                ))}
              </StyledView>
            </Space>
          </Flex>
        </Tabs.List>
        <>
          {options.map((option) => (
            <StyledContent key={option.value} value={option.value}>
              {option.content}
            </StyledContent>
          ))}
        </>
      </Tabs.Root>
    </View>
  );
};

export default Tab;
