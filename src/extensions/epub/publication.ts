import { JSON as TaJson, JsonElementType, JsonObject, JsonProperty } from 'ta-json-x';
import { Link } from '../../models/link';
import { Publication } from '../../models/publication';
import { EPUBMetadata } from './metadata';

@JsonObject()
export class EPUBPublication extends Publication {
  @JsonProperty('metadata')
  public metadata!: EPUBMetadata;

  @JsonProperty('toc')
  @JsonElementType(Link)
  public toc!: Link[];

  @JsonProperty('page-list')
  @JsonElementType(Link)
  public pageList!: Link[];

  @JsonProperty('landmarks')
  @JsonElementType(Link)
  public landmarks!: Link[];

  @JsonProperty('loi')
  @JsonElementType(Link)
  public loi!: Link[];

  @JsonProperty('loa')
  @JsonElementType(Link)
  public loa!: Link[];

  @JsonProperty('lov')
  @JsonElementType(Link)
  public lov!: Link[];

  @JsonProperty('lot')
  @JsonElementType(Link)
  public lot!: Link[];

  public static parse(json: string): EPUBPublication {
    return TaJson.parse<EPUBPublication>(json, EPUBPublication);
  }
}
