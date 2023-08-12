import Size from '@org/ui/components/Layout/Size';
import Space from '@org/ui/components/Layout/Space';

import StyledView from '@org/ui/components/Layout/StyledView';
import Tab from '@org/ui/components/Tab';
import React from 'react';
import FormMetaFields from './FormMetaFields';

const SidePanel = () => {
  return (
    <Size width="312px">
      <Space padding={8}>
        <StyledView background="backgroundBody">
          <Space padding={8}>
            <StyledView background="backgroundCard" borderRadius={[8]}>
              <Tab
                options={[
                  {
                    label: 'Basic Fields',
                    value: 'tab1',
                    content: <FormMetaFields />,
                  },
                  {
                    label: 'Advance Fields',
                    value: 'tab2',
                    content: <>Advance Fields Fields</>,
                  },
                ]}
                defaultValue="tab1"
              />
            </StyledView>
          </Space>
        </StyledView>
      </Space>
    </Size>
  );
};

export default SidePanel;
