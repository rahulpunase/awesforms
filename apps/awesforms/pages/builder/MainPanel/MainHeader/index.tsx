import React from 'react';
import Flex from '@org/ui/components/Layout/Flex';
import Space from '@org/ui/components/Layout/Space';
import View from '@org/ui/components/Layout/View';
import Text from '@org/ui/components/Text';

const MainHeader = () => {
  return (
    <Flex>
      <Space margin={[0, 0, 16, 0]}>
        <View>
          <Text fontSize="xxl">Test Form</Text>
        </View>
      </Space>
    </Flex>
  );
};

export default MainHeader;
