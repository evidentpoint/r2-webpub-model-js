import { IPropertyConverter, JSON as TaJson, JsonValue } from 'ta-json-x';
import { Thing } from '../thing';

export class JsonThingConverter<T> implements IPropertyConverter {
  private readonly type: new () => T;

  constructor(typeFn: new () => T) {
    this.type = typeFn;
  }

  public serialize(property: T): JsonValue {
    return TaJson.serialize(property);
  }

  public deserialize(value: JsonValue): T {
    if (typeof value === 'string') {
      const c = (new this.type() as unknown) as Thing;
      c.Name = value;
      return (c as unknown) as T;
    } else {
      return TaJson.deserialize<T>(value, this.type);
    }
  }

  public collapseArrayWithSingleItem(): boolean {
    /* istanbul ignore next */
    return true;
  }
}
