import { IPropertyConverter, JSON as TaJson, JsonValue } from 'ta-json-x';

import { Contributor } from '../metadata-contributor';

export class JsonContributorConverter implements IPropertyConverter {
  public serialize(property: Contributor): JsonValue {
    return TaJson.serialize(property);
  }

  public deserialize(value: JsonValue): Contributor {
    if (typeof value === 'string') {
      const c = new Contributor();
      c.Name = value as string;
      return c;
    } else {
      return TaJson.deserialize<Contributor>(value, Contributor);
    }
  }

  public collapseArrayWithSingleItem(): boolean {
    return true;
  }
}
