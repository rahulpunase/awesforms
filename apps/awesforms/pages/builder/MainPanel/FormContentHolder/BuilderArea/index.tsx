import Flex from '@org/ui/components/Layout/Flex';
import Space from '@org/ui/components/Layout/Space';
import StyledView from '@org/ui/components/Layout/StyledView';
import Button from '@org/ui/components/Button';
import React from 'react';
import Size from '@org/ui/components/Layout/Size';
import View from '@org/ui/components/Layout/View';

const BuilderArea = () => {
  return (
    <Flex
      name="BuildingArea"
      flex="1"
      alignItems="center"
      flexDirection="column"
    >
      <Space padding={16}>
        <StyledView border="main" background="backgroundBody" borderRadius={12}>
          <Flex>
            <Size minWidth="500px">
              <View></View>
            </Size>
          </Flex>
        </StyledView>
      </Space>
    </Flex>
  );
};

export default BuilderArea;
