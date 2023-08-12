import type { Meta } from '@storybook/react';
import TextField from './index';

const Story: Meta<typeof TextField> = {
  component: TextField,
  title: 'TextField',
};
export default Story;

export const Primary = {
  args: {
    placeholder: 'Write something here',
  },
};
