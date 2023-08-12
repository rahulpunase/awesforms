import Flex from '@org/ui/components/Layout/Flex';
import Space from '@org/ui/components/Layout/Space';
import StyledView from '@org/ui/components/Layout/StyledView';
import React from 'react';
import MainHeader from './MainHeader';
import Menubar from '../Menubar';
import View from '@org/ui/components/Layout/View';
import FormContentHolder from './FormContentHolder';

const MainPanel = () => {
  return (
    <Flex name="Main Panel" flex="1">
      <Space padding={[16, 16, 16, 48]}>
        <StyledView background="backgroundCard" borderRadius={[12, 0, 0, 12]}>
          <Flex flexDirection="column" flexGrow="1">
            <View>
              <MainHeader />
              <Menubar />
              <FormContentHolder />
            </View>
          </Flex>
        </StyledView>
      </Space>
    </Flex>
  );
};

export default MainPanel;
