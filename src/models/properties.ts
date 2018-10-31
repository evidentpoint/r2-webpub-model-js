import { JsonConverter, JsonElementType, JsonObject, JsonProperty } from 'ta-json-x';
import { JsonStringConverter } from './converters/string-converter';

// import { Encrypted } from '@r2-lcp-js/models/metadata-encrypted';

@JsonObject()
export class Properties {
  @JsonConverter(JsonStringConverter)
  @JsonProperty('contains')
  @JsonElementType(String)
  public contains!: string[];

  @JsonProperty('layout')
  public layout!: string;

  @JsonProperty('media-overlay')
  public mediaOverlay!: string;

  @JsonProperty('orientation')
  public orientation!: string;

  @JsonProperty('overflow')
  public overflow!: string;

  @JsonProperty('page')
  public page!: string;

  @JsonProperty('spread')
  public spread!: string;

  // @JsonProperty('encrypted')
  // public Encrypted!: Encrypted;
}
