import React from 'react';
import type { Meta } from '@storybook/react';
import Popover from './index';
import Button from '../Button';

const Story: Meta<typeof Popover> = {
  component: Popover,
  title: 'Popover',
};
export default Story;

export const Primary = {
  args: {
    trigger: <Button icon={'fa fa-bars'} shape="circle" variant="filled" />,
  },
};
