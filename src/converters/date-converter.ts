import { IPropertyConverter, JsonValue } from 'ta-json-x';

export class JsonDateConverter implements IPropertyConverter {
  public serialize(property: Date | undefined): JsonValue {
    return property ? property.toISOString() : null;
  }

  public deserialize(value: JsonValue): Date | undefined {
    const date = new Date(value as string);
    return isNaN(date.getTime()) ? undefined : date;
  }

  /* istanbul ignore next */
  public collapseArrayWithSingleItem(): boolean {
    return false;
  }
}
