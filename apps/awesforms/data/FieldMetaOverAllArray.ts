import { FieldMetaDataType } from './FieldMetaDataTypes';
import {
  FinalRadioFieldConfiguration,
  RadioFieldMetaData,
} from './RadioFieldMetaData';
import {
  FinalSingleLineFieldMetaType,
  SingleLineFieldMetaData,
} from './SingleFieldMetaData';

export const BasicFields: Array<
  FieldMetaDataType<FinalSingleLineFieldMetaType | FinalRadioFieldConfiguration>
> = [SingleLineFieldMetaData, RadioFieldMetaData];
