import {
  JSON as TaJson,
  JsonConverter,
  JsonElementType,
  JsonObject,
  JsonProperty,
  OnDeserialized,
} from 'ta-json-x';

import { Metadata } from './metadata';
import { Link } from './link';
import { JsonStringConverter } from './converters/ta-json-string-converter';

@JsonObject()
export class Publication {
  @JsonConverter(JsonStringConverter)
  @JsonProperty('@context')
  @JsonElementType(String)
  public Context!: string[];

  @JsonProperty('metadata')
  public Metadata!: Metadata;

  @JsonProperty('links')
  @JsonElementType(Link)
  public Links!: Link[];

  @JsonProperty('readingOrder')
  @JsonElementType(Link)
  public ReadingOrder!: Link[];

  @JsonProperty('resources')
  @JsonElementType(Link)
  public Resources!: Link[];

  public static parse(json: string): Publication {
    return TaJson.parse<Publication>(json, Publication);
  }

  public serialize(): string {
    return TaJson.serialize(this);
  }

  public stringify(): string {
    return TaJson.stringify(this);
  }

  @OnDeserialized()
  // tslint:disable-next-line:no-unused-variable
  // @ts-ignore: TS6133 (is declared but its value is never read.)
  private _OnDeserialized() {
    if (!this.Metadata) {
      console.log('Required [Publication.Metadata] is not set!');
    }
    if (!this.Links) {
      console.log('Required [Publication.Links] is not set!');
    }
    if (!this.ReadingOrder) {
      console.log('Required [Publication.ReadingOrder] is not set!');
    }
  }
}
