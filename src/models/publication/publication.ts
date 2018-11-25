import {
  JSON as TaJson,
  JsonConverter,
  JsonElementType,
  JsonObject,
  JsonProperty,
  OnDeserialized,
  propertyConverters,
} from 'ta-json-x';

import { JsonStringConverter } from '../../converters/string-converter';
import { JsonDateConverter } from '../../converters/date-converter';
import { JsonNumberConverter } from '../../converters/number-converter';

propertyConverters.set(Date, new JsonDateConverter());
propertyConverters.set(Number, new JsonNumberConverter());

import { Metadata } from './metadata';
import { Link } from './link';
import { PublicationCore } from './interfaces/publication-core';
import { PublicationEPUB } from './interfaces/publication-epub';

@JsonObject()
export class Publication implements PublicationCore, PublicationEPUB {
  // Core

  @JsonConverter(JsonStringConverter)
  @JsonProperty('@context')
  @JsonElementType(String)
  public context!: string[];

  @JsonProperty('metadata')
  public metadata!: Metadata;

  @JsonProperty('links')
  @JsonElementType(Link)
  public links!: Link[];

  @JsonProperty('readingOrder')
  @JsonElementType(Link)
  public readingOrder!: Link[];

  @JsonProperty('resources')
  @JsonElementType(Link)
  public resources!: Link[];

  // EPUB extension

  @JsonProperty('toc')
  @JsonElementType(Link)
  public toc!: Link[];

  @JsonProperty('page-list')
  @JsonElementType(Link)
  public pageList!: Link[];

  @JsonProperty('landmarks')
  @JsonElementType(Link)
  public landmarks!: Link[];

  @JsonProperty('loi')
  @JsonElementType(Link)
  public loi!: Link[];

  @JsonProperty('loa')
  @JsonElementType(Link)
  public loa!: Link[];

  @JsonProperty('lov')
  @JsonElementType(Link)
  public lov!: Link[];

  @JsonProperty('lot')
  @JsonElementType(Link)
  public lot!: Link[];

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
    if (!this.metadata) {
      console.log('Required [Publication.Metadata] is not set!');
    }
    /* istanbul ignore next */
    if (!this.links) {
      console.log('Required [Publication.Links] is not set!');
    }
    /* istanbul ignore next */
    if (!this.readingOrder) {
      console.log('Required [Publication.ReadingOrder] is not set!');
    }
  }
}
