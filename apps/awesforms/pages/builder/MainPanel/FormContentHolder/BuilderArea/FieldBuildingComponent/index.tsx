import React from 'react';
import View from '@org/ui/components/Layout/View';

import { useAppSelector } from '../../../../../../hooks/ReduxHooks';

const RenderFieldsAsPerSelection = ({ selectedFields }) => {
  return null;
};

const FieldBuildingComponent = () => {
  const builderReducer = useAppSelector((store) => store.builderReducer);
  return (
    <View>
      <RenderFieldsAsPerSelection
        selectedFields={builderReducer.selectedMetaFields}
      />
    </View>
  );
};

export default FieldBuildingComponent;
