import { JsonConverter, JsonElementType, JsonObject, JsonProperty } from 'ta-json-x';

import { Metadata } from '../../metadata';
import { Properties } from '../../metadata-properties';
import { JsonStringConverter } from '../../converters/ta-json-string-converter';
import { MediaOverlay } from './metadata-media-overlay';

@JsonObject()
export class EPUBMetadata extends Metadata {
  @JsonProperty('rendition')
  public Rendition!: Properties;

  @JsonProperty('source')
  public Source!: string;

  @JsonConverter(JsonStringConverter)
  @JsonProperty('epub-type')
  @JsonElementType(String)
  public EpubType!: string[];

  @JsonProperty('rights')
  public Rights!: string;

  @JsonProperty('media-overlay')
  public MediaOverlay!: MediaOverlay;
}
