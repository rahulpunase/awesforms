import Flex from '@org/ui/components/Layout/Flex';
import Space from '@org/ui/components/Layout/Space';
import View from '@org/ui/components/Layout/View';
import Text from '@org/ui/components/Text';
import React from 'react';

const Menubar = () => {
  return (
    <Flex flexDirection="row">
      <Space margin={[0, 0, 12, 0]}>
        <View>
          {[
            'Builder',
            'Rules',
            'Settings',
            'Themes',
            'Share',
            'Integration',
          ].map((label) => (
            <Space key={label} padding={[4, 12, 4, 4]}>
              <Text>{label}</Text>
            </Space>
          ))}
        </View>
      </Space>
    </Flex>
  );
};

export default Menubar;
