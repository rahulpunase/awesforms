// export type FieldValidation = 'REQUIRED'

export enum FieldValidationKeys {
  REQUIRED = 'REQUIRED',
  MIN = 'MIN',
}

export type TypeFieldValidation = {
  name: string;
  isActive: boolean;
};

export const FieldValidations: Record<
  FieldValidationKeys,
  TypeFieldValidation
> = {
  [FieldValidationKeys.REQUIRED]: {
    name: 'Required',
    isActive: false,
  },
  [FieldValidationKeys.MIN]: {
    name: 'Min',
    isActive: false,
  },
};

export type Visibility = {
  name: string;
  isApplied: boolean;
};

export type MetaFieldSize = 'small' | 'medium' | 'large';

export type FieldCommonConfiguration = {
  label: string;
  instruction: string;
  hideLabel: boolean;
};

export type RadioChoices = {
  label: string;
  checked: false;
};

export type FieldMetaDataType<BasicConfig> = {
  name: string;
  type: string;
  configuration: BasicConfig;
};

export enum FieldTypes {
  SingleField = 'SINGLE_FIELD',
  RadioField = 'RADIO_FIELD',
}
