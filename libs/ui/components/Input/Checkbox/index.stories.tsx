import type { Meta } from '@storybook/react';
import Checkbox from './index';

const Story: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Checkbox',
};
export default Story;

export const Primary = {
  args: {
    label: 'Check me if you want',
  },
};
