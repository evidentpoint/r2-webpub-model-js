import { IPropertyConverter, JsonValue } from 'ta-json-x';

export class JsonStringConverter implements IPropertyConverter {
  public serialize(property: string): JsonValue {
    return property;
  }

  public deserialize(value: JsonValue): string {
    return value as string;
  }

  public collapseArrayWithSingleItem(): boolean {
    return true;
  }
}
