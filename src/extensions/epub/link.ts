import { JsonElementType, JsonObject, JsonProperty } from 'ta-json-x';

import { MediaOverlayNode } from './media-overlay';
import { Link } from '../../models/link';

@JsonObject()
export class EPUBLink extends Link {
  @JsonProperty('children')
  @JsonElementType(Link)
  public children!: Link[];

  public mediaOverlays: MediaOverlayNode[] | undefined;
}
