import {
  FieldCommonConfiguration,
  FieldMetaDataType,
  FieldTypes,
  FieldValidations,
  MetaFieldSize,
  TypeFieldValidation,
  Visibility,
} from './FieldMetaDataTypes';

type SingleLineConfiguration = {
  size: MetaFieldSize;
  placeholder: string;
  initialValue: string;
  characterLimit: {
    min: number;
    max: number;
  };
  validation: TypeFieldValidation[];
  visibility: Visibility[];
};

export type FinalSingleLineFieldMetaType = FieldCommonConfiguration &
  SingleLineConfiguration;

export const SingleLineFieldMetaData: FieldMetaDataType<FinalSingleLineFieldMetaType> =
  {
    name: 'Single Line',
    type: FieldTypes.SingleField,
    configuration: {
      instruction: '',
      label: 'Single Line',
      hideLabel: false,
      placeholder: '',
      size: 'medium',
      initialValue: '',
      characterLimit: {
        min: 0,
        max: 0,
      },
      validation: [FieldValidations.REQUIRED],
      visibility: [
        {
          isApplied: false,
          name: 'Visibility',
        },
      ],
    },
  };
