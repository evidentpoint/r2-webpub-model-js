import { JsonObject, JsonProperty, propertyConverters } from 'ta-json-x';
import { JsonThingConverter } from './converters/thing-json-converter';

import { Thing } from './thing';

@JsonObject()
export class Collection extends Thing {
  @JsonProperty('position')
  public position!: number;
}

propertyConverters.set(Collection, new JsonThingConverter(Collection));
