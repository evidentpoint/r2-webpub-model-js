import { JsonElementType, JsonObject, JsonProperty } from 'ta-json-x';

import { Collection } from './metadata-collection';

@JsonObject()
export class BelongsTo {
  @JsonProperty('series')
  @JsonElementType(Collection)
  public Series!: Collection[];

  @JsonProperty('collection')
  @JsonElementType(Collection)
  public Collection!: Collection[];
}
