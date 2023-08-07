import { useState } from 'react';
import { styled } from 'styled-components';
import * as Popover from '@radix-ui/react-popover';
import Button from '../Button';
import Flex from '../Layout/Flex';
import View from '../Layout/View';
import StyledView from '../Layout/StyledView';
import Size from '../Layout/Size';
import Space from '../Layout/Space';
import Text from '../Text';

type PopoverProps = {
  name?: string;
};

const CustomCloseButton = styled(Button)`
  height: 24px;
  width: 24px;
  padding: 4px;
`;

const CustomTrigger = styled(Popover.Trigger)`
  border: none;
  background: transparent;
`;

const CustomArrow = styled(Popover.Arrow)`
  fill: ${({ theme }) => theme.getColor('backgroundCard')};
  width: 16px;
  height: 8px;
  top: 1px;
`;

const Item = styled(View)``;

export default function CustomPopover() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <Popover.Root onOpenChange={() => setIsOpened(!isOpened)}>
      <CustomTrigger>
        <Button
          icon={isOpened ? 'fa fa-check' : 'fa fa-bars'}
          shape="circle"
          variant="filled"
        />
      </CustomTrigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <CustomArrow />
          <Flex flexDirection="column">
            <Size width="300px" height="auto">
              <Space padding={8}>
                <StyledView
                  borderRadius={4}
                  background="backgroundCard"
                  boxShadow="elvt4"
                >
                  <Popover.Close asChild>
                    <CustomCloseButton
                      icon="fa fa-times"
                      shape="circle"
                      variant="text"
                    />
                  </Popover.Close>
                  <Item>
                    <Text>Item one</Text>
                  </Item>
                </StyledView>
              </Space>
            </Size>
          </Flex>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
