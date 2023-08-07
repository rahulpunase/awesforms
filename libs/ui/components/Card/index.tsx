import Flex from '../Layout/Flex';
import View from '../Layout/View';
import Text from '../Text';
import Space from '../Layout/Space';
import { ReactNode } from 'react';
import StyledView from '../Layout/StyledView';
import { EShadows } from '../../variables';

interface ICard {
  title: string;
  elevated?: keyof typeof EShadows;
  children?: ReactNode;
  headerSideAction?: ReactNode;
}

const Card: React.FC<ICard> = ({
  elevated,
  title,
  children,
  headerSideAction,
  ...props
}) => (
  <Flex name="CardComponent">
    <StyledView
      boxShadow={elevated}
      onHoverShadow
      background="backgroundCard"
      border="main"
      borderRadius={8}
      cursor="pointer"
    >
      <Space padding={[12, 16, 8, 16]}>
        <StyledView borderBottom="main">
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <View>
              <Text fontWeight="bold" fontSize="large">
                {title}
              </Text>
              {headerSideAction ? (
                <Space margin={[0, 0, 0, 24]}>
                  <View>{headerSideAction}</View>
                </Space>
              ) : null}
            </View>
          </Flex>
        </StyledView>
      </Space>
      {children ? (
        <Space padding={[12, 16, 16, 16]}>
          <View name="body">{children}</View>
        </Space>
      ) : null}
    </StyledView>
  </Flex>
);

export default Card;
