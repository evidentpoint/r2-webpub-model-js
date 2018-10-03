import { JsonObject, JsonProperty } from 'ta-json-x';
import { Thing } from './metadata-thing';

@JsonObject()
export class Collection extends Thing {
  @JsonProperty('position')
  public Position!: number;
}
