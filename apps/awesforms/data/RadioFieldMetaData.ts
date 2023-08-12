import {
  FieldCommonConfiguration,
  FieldMetaDataType,
  FieldTypes,
  FieldValidations,
  RadioChoices,
  TypeFieldValidation,
} from './FieldMetaDataTypes';

export type RadioFieldConfiguration = {
  choices: RadioChoices[];
  validation: TypeFieldValidation[];
};

export type FinalRadioFieldConfiguration = FieldCommonConfiguration &
  RadioFieldConfiguration;

export const RadioFieldMetaData: FieldMetaDataType<FinalRadioFieldConfiguration> =
  {
    name: 'Radio',
    type: FieldTypes.RadioField,
    configuration: {
      hideLabel: false,
      instruction: '',
      label: 'Select Something',
      choices: [
        {
          label: 'Choice 1',
          checked: false,
        },
      ],
      validation: [FieldValidations.REQUIRED],
    },
  };
