import Icon from '@org/ui/components/Icon';
import Flex from '@org/ui/components/Layout/Flex';
import Space from '@org/ui/components/Layout/Space';
import StyledView from '@org/ui/components/Layout/StyledView';
import View from '@org/ui/components/Layout/View';
import Text from '@org/ui/components/Text';
import { BasicFields } from '../../../../data/FieldMetaOverAllArray';
import { BuilderAction } from '../../store';
import { useDispatch } from 'react-redux';
import { FieldCommonConfiguration } from 'apps/awesforms/data/FieldMetaDataTypes';

const MetaField = ({ field }: FieldCommonConfiguration) => {
  const dispatch = useDispatch();
  return (
    <Space
      padding={[8, 12]}
      margin={[4, 0]}
      onClick={() => dispatch(BuilderAction.addMetaFields())}
    >
      <StyledView
        background="backgroundSecondary"
        borderRadius={8}
        cursor="pointer"
      >
        <Flex flexDirection="row" justifyContent="space-between">
          <View>
            <Text>{field.label}</Text>
            <Flex flexDirection="row">
              <View>
                <Space padding={[0, 2, 0, 0]}>
                  <View>
                    <Icon icon="fa-solid fa-ellipsis-vertical" />
                  </View>
                </Space>
                <Icon icon="fa-solid fa-ellipsis-vertical" />
              </View>
            </Flex>
          </View>
        </Flex>
      </StyledView>
    </Space>
  );
};

const FormMetaFields = () => {
  return (
    <Flex>
      <View>
        {BasicFields.map((field) => (
          <MetaField key={field.name} field={field} />
        ))}
      </View>
    </Flex>
  );
};

export default FormMetaFields;
