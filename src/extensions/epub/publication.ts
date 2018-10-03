import { JsonElementType, JsonObject, JsonProperty } from 'ta-json-x';
import { Link } from '../../link';

@JsonObject()
export class Publication {
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
}
