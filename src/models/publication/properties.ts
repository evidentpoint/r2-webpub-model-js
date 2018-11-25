import { JsonConverter, JsonElementType, JsonObject, JsonProperty } from 'ta-json-x';
import { JsonStringConverter } from '../../converters/string-converter';
import { OrientationProperty, PageProperty, PropertiesCore } from './interfaces/properties-core';
import {
  ContainsMediaType,
  LayoutProperty,
  OverflowProperty,
  PropertiesEPUB,
  SpreadProperty,
} from './interfaces/properties-epub';

// import { Encrypted } from '@r2-lcp-js/models/metadata-encrypted';

@JsonObject()
export class Properties implements PropertiesCore, PropertiesEPUB {
  // Core

  @JsonProperty('orientation')
  public orientation!: OrientationProperty;

  @JsonProperty('page')
  public page!: PageProperty;

  // EPUB extension

  @JsonConverter(JsonStringConverter)
  @JsonProperty('contains')
  @JsonElementType(String)
  public contains!: ContainsMediaType[];

  @JsonProperty('encrypted')
  public encrypted!: object; //TODO: Create true Encrypted object

  @JsonProperty('layout')
  public layout!: LayoutProperty;

  @JsonProperty('media-overlay')
  public mediaOverlay!: string;

  @JsonProperty('overflow')
  public overflow!: OverflowProperty;

  @JsonProperty('spread')
  public spread!: SpreadProperty;
}
