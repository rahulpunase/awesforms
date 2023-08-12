import type { Meta } from '@storybook/react';
import Tab from './index';
import React from 'react';

const Story: Meta<typeof Tab> = {
  component: Tab,
  title: 'Tab',
};
export default Story;

export const Primary = {
  args: {
    options: [
      {
        label: 'Basic Fields',
        value: 'tab1',
        content: <>Basic Fields</>,
      },
      {
        label: 'Advance Fields',
        value: 'tab2',
        content: <>Advance Fields Fields</>,
      },
    ],
    defaultValue: 'tab2',
  },
};
