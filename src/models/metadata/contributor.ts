import { JsonConverter, JsonElementType, JsonObject, JsonProperty, propertyConverters } from 'ta-json-x';
import { JsonStringConverter } from '../converters/string-converter';
import { JsonThingConverter } from './converters/thing-json-converter';

import { Thing } from './thing';

@JsonObject()
export class Contributor extends Thing {
  @JsonConverter(JsonStringConverter)
  @JsonProperty('role')
  @JsonElementType(String)
  public Role!: string[];
}

propertyConverters.set(Contributor, new JsonThingConverter(Contributor));
