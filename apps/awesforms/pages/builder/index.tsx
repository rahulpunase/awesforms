import React from 'react';
import Size from '@org/ui/components/Layout/Size';
import View from '@org/ui/components/Layout/View';
import Flex from '@org/ui/components/Layout/Flex';
import SidePanel from './SidePanel';
import MainPanel from './MainPanel';

const Builder = () => {
  return (
    <Size width="100%" height="100%">
      <Flex flexDirection="row">
        <View>
          <SidePanel />
          <MainPanel />
        </View>
      </Flex>
    </Size>
  );
};

export default Builder;
