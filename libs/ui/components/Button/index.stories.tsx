import type { Meta, StoryObj } from '@storybook/react';
import DefaultButton, {
  PossibleButtonVariants,
  PossibleShapes,
  PossibleComponents,
} from './index';

const Story: Meta<typeof DefaultButton> = {
  component: DefaultButton,
  title: 'DefaultButton',
  argTypes: {
    variant: {
      options: [
        PossibleButtonVariants.outlined,
        PossibleButtonVariants.text,
        PossibleButtonVariants.filled,
      ],
      control: { type: 'radio' },
    },
    shape: {
      options: [PossibleShapes.circle, PossibleShapes.rect],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary', 'error'],
      control: { type: 'radio' },
    },
    component: {
      options: [PossibleComponents.a, PossibleComponents.button],
      control: { type: 'radio' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
};

export default Story;
type Story = StoryObj<typeof DefaultButton>;

export const Primary = {
  args: {
    variant: 'filled',
    component: 'button',
    color: 'primary',
    label: 'Button',
    icon: '',
    disabled: false,
  },
};
