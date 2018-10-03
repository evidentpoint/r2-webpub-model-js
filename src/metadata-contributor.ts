import { JsonConverter, JsonElementType, JsonObject, JsonProperty } from 'ta-json-x';

import { JsonStringConverter } from './converters/ta-json-string-converter';
import { Thing } from './metadata-thing';

@JsonObject()
export class Contributor extends Thing {
  @JsonConverter(JsonStringConverter)
  @JsonProperty('role')
  @JsonElementType(String)
  public Role!: string[];
}
