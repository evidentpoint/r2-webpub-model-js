import { JsonElementType, JsonObject, JsonProperty } from 'ta-json-x';

import { Collection } from './collection';

@JsonObject()
export class BelongsTo {
  @JsonProperty('series')
  @JsonElementType(Collection)
  public series!: Collection[];

  @JsonProperty('collection')
  @JsonElementType(Collection)
  public collection!: Collection[];
}
