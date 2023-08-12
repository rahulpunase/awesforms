import Size from '@org/ui/components/Layout/Size';
import Space from '@org/ui/components/Layout/Space';
import View from '@org/ui/components/Layout/View';
import React from 'react';

const ConfigArea = () => {
  return (
    <Size width="30%">
      <Space padding={[16]}>
        <View>Hello</View>
      </Space>
    </Size>
  );
};

export default ConfigArea;
