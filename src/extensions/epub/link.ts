import { JsonElementType, JsonObject, JsonProperty } from 'ta-json-x';

import { MediaOverlayNode } from './media-overlay';
import { Link } from '../../link';

@JsonObject()
export class EPUBLink extends Link {
  @JsonProperty('children')
  @JsonElementType(Link)
  public Children!: Link[];

  public MediaOverlays: MediaOverlayNode[] | undefined;
}
