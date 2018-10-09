import { JSON as TaJson, JsonElementType, JsonObject, JsonProperty } from 'ta-json-x';
import { Link } from '../../models/link';
import { Publication } from '../../models/publication';
import { EPUBMetadata } from './metadata';

@JsonObject()
export class EPUBPublication extends Publication {
  @JsonProperty('metadata')
  public Metadata!: EPUBMetadata;

  @JsonProperty('toc')
  @JsonElementType(Link)
  public TOC!: Link[];

  @JsonProperty('page-list')
  @JsonElementType(Link)
  public PageList!: Link[];

  @JsonProperty('landmarks')
  @JsonElementType(Link)
  public Landmarks!: Link[];

  @JsonProperty('loi')
  @JsonElementType(Link)
  public LOI!: Link[];

  @JsonProperty('loa')
  @JsonElementType(Link)
  public LOA!: Link[];

  @JsonProperty('lov')
  @JsonElementType(Link)
  public LOV!: Link[];

  @JsonProperty('lot')
  @JsonElementType(Link)
  public LOT!: Link[];

  public static parse(json: string): EPUBPublication {
    return TaJson.parse<EPUBPublication>(json, EPUBPublication);
  }
}
