import { IPropertyConverter, JSON as TaJson, JsonValue } from 'ta-json-x';

import { Collection } from '../metadata-collection';

export class JsonCollectionConverter implements IPropertyConverter {
  public serialize(property: Collection): JsonValue {
    return TaJson.serialize(property);
  }

  public deserialize(value: JsonValue): Collection {
    if (typeof value === 'string') {
      const c = new Collection();
      c.Name = value as string;
      return c;
    } else {
      return TaJson.deserialize<Collection>(value, Collection);
    }
  }

  public collapseArrayWithSingleItem(): boolean {
    return true;
  }
}
