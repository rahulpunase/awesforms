import Flex from '@org/ui/components/Layout/Flex';
import View from '@org/ui/components/Layout/View';
import React from 'react';
import BuilderArea from './BuilderArea';
import ConfigArea from './ConfigArea';

const FormContentHolder = () => {
  return (
    <Flex name="FormContentHolder" flexDirection="row" flexGrow="1">
      <View>
        <BuilderArea />
        <ConfigArea />
      </View>
    </Flex>
  );
};

export default FormContentHolder;
