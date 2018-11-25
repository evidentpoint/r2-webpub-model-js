import { IPropertyConverter, JsonValue } from 'ta-json-x';

export class JsonStringConverter implements IPropertyConverter {
  public serialize(property: string): JsonValue {
    return property;
  }

  public deserialize(value: JsonValue): string {
    return value as string;
  }

  // not ignored here for istanbul, because it should be used if 'true'
  public collapseArrayWithSingleItem(): boolean {
    return true;
  }
}
