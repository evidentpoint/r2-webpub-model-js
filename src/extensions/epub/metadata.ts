import { JsonConverter, JsonElementType, JsonObject, JsonProperty } from 'ta-json-x';

import { Metadata } from '../../models/metadata';
import { Properties } from '../../models/properties';
import { JsonStringConverter } from '../../models/converters/string-converter';
import { MediaOverlay } from './metadata/media-overlay';

@JsonObject()
export class EPUBMetadata extends Metadata {
  @JsonProperty('rendition')
  public rendition!: Properties;

  @JsonProperty('source')
  public source!: string;

  @JsonConverter(JsonStringConverter)
  @JsonProperty('epub-type')
  @JsonElementType(String)
  public epubType!: string[];

  @JsonProperty('rights')
  public rights!: string;

  @JsonProperty('media-overlay')
  public mediaOverlay!: MediaOverlay;
}
