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

  public stringify(): string {
    return TaJson.stringify(this);
  }

  public static deserialize(object: any): Publication {
    return TaJson.deserialize<Publication>(object, Publication);
  }

  public serialize(): any {
    return TaJson.serialize(this);
  }

  @OnDeserialized()
  // tslint:disable-next-line:no-unused-variable
  // @ts-ignore: TS6133 (is declared but its value is never read.)
  private _OnDeserialized() {
    /* istanbul ignore next */
    if (!this.Metadata) {
      console.log('Required [Publication.Metadata] is not set!');
    }
    /* istanbul ignore next */
    if (!this.Links) {
      console.log('Required [Publication.Links] is not set!');
    }
    /* istanbul ignore next */
    if (!this.ReadingOrder) {
      console.log('Required [Publication.ReadingOrder] is not set!');
    }
  }
}
