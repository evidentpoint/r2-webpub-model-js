import {
  JSON as TaJson,
  JsonConverter,
  JsonElementType,
  JsonObject,
  JsonProperty,
  OnDeserialized,
  propertyConverters,
} from 'ta-json-x';

import { JsonStringConverter } from './converters/string-converter';
import { JsonDateConverter } from './converters/date-converter';
import { JsonNumberConverter } from './converters/number-converter';

propertyConverters.set(Date, new JsonDateConverter());
propertyConverters.set(Number, new JsonNumberConverter());

import { Metadata } from './metadata';
import { Link } from './link';

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
