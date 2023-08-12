import { ReactNode } from 'react';
import { styled } from 'styled-components';
import * as Popover from '@radix-ui/react-popover';
import Button from '../Button';
import Flex from '../Layout/Flex';
import View from '../Layout/View';
import StyledView from '../Layout/StyledView';
import Size from '../Layout/Size';
import Space from '../Layout/Space';
import Position from '../Layout/Position';

type PopoverProps = {
  trigger: ReactNode;
  onOpenChange?: () => void;
  content: ReactNode;
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

export default function CustomPopover({
  trigger,
  onOpenChange,
  content,
}: PopoverProps) {
  return (
    <Popover.Root onOpenChange={onOpenChange}>
      <CustomTrigger>{trigger}</CustomTrigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <CustomArrow />
          <Flex flexDirection="column">
            <Size width="300px" height="auto">
              <Space padding={[8, 12, 12]}>
                <StyledView
                  borderRadius={4}
                  background="backgroundCard"
                  boxShadow="elvt4"
                >
                  <Popover.Close asChild>
                    <Position position="absolute" top="4px" right="6px">
                      <CustomCloseButton
                        icon="fa fa-times"
                        shape="circle"
                        variant="text"
                      />
                    </Position>
                  </Popover.Close>
                  <Space padding={[12, 0, 0, 0]}>
                    <View>{content}</View>
                  </Space>
                </StyledView>
              </Space>
            </Size>
          </Flex>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
