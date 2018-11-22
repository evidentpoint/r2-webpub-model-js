import { JsonObject, JsonProperty } from 'ta-json-x';
import { Thing } from './thing';

@JsonObject()
export class Subject extends Thing {
  @JsonProperty('scheme')
  public scheme!: string;

  @JsonProperty('code')
  public code!: string;
}
