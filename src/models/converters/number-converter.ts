import { IPropertyConverter, JsonValue } from 'ta-json-x';

export class JsonNumberConverter implements IPropertyConverter {
  public serialize(property: number | string): JsonValue {
    return typeof property === 'string' ? Number(property) : property;
  }

  public deserialize(value: JsonValue): number {
    return Number(value);
  }

  public collapseArrayWithSingleItem(): boolean {
    return false;
  }
}
