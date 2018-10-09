import { JsonObject, JsonProperty } from 'ta-json-x';
import { Thing } from './thing';

@JsonObject()
export class Subject extends Thing {
  @JsonProperty('scheme')
  public Scheme!: string;

  @JsonProperty('code')
  public Code!: string;
}
