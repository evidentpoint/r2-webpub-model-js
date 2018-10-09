import { JsonConverter, JsonElementType, JsonObject, JsonProperty } from 'ta-json-x';
import { JsonStringConverter } from './converters/string-converter';

// import { Encrypted } from '@r2-lcp-js/models/metadata-encrypted';

@JsonObject()
export class Properties {
  @JsonConverter(JsonStringConverter)
  @JsonProperty('contains')
  @JsonElementType(String)
  public Contains!: string[];

  @JsonProperty('layout')
  public Layout!: string;

  @JsonProperty('media-overlay')
  public MediaOverlay!: string;

  @JsonProperty('orientation')
  public Orientation!: string;

  @JsonProperty('overflow')
  public Overflow!: string;

  @JsonProperty('page')
  public Page!: string;

  @JsonProperty('spread')
  public Spread!: string;

  // @JsonProperty('encrypted')
  // public Encrypted!: Encrypted;
}
