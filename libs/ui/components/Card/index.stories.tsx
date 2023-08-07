import type { Meta } from '@storybook/react';
import Card from './index';
import React from 'react';
import Text from '../Text';
import Button from '../Button';
import View from '../Layout/View';

const Story: Meta<typeof Card> = {
  component: Card,
  title: 'Card',
};

export default Story;

export const Primary = {
  args: {
    title: 'My Awesome title',
    elevated: 'elvt1',
    children: <Text>I am the children part</Text>,
  },
};

export const WithHeaderSideAction = {
  args: {
    ...Primary.args,
    children: (
      <View>
        <Text>I am the children part</Text>
        <Text>I am the children part</Text>
        <Text>I am the children part</Text>
      </View>
    ),
    headerSideAction: <Button color="primary" variant="text" label="More" />,
  },
};
