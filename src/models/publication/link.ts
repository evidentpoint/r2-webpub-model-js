import {
  JsonConverter,
  JsonElementType,
  JsonObject,
  JsonProperty,
  OnDeserialized,
} from 'ta-json-x';

import { JsonStringConverter } from '../../converters/string-converter';

import { Properties } from './properties';
import { LinkCore, Relation } from './interfaces/link-core';

/**
 * https://readium.org/webpub-manifest/#the-link-object
 */
@JsonObject()
export class Link implements LinkCore {
  // Core

  /**
   * https://readium.org/webpub-manifest/extensions/epub.html#extension-to-the-link-object
   */
  @JsonProperty('children')
  @JsonElementType(Link)
  public children!: Link[];

  @JsonProperty('href')
  public href!: string;

  @JsonProperty('type')
  public type!: string;

  @JsonProperty('title')
  public title!: string;

  @JsonProperty('rel')
  @JsonConverter(JsonStringConverter)
  @JsonElementType(String)
  public rel!: Set<Relation>;

  @JsonProperty('height')
  public height!: number;

  @JsonProperty('width')
  public width!: number;

  @JsonProperty('properties')
  public properties!: Properties;

  @JsonProperty('duration')
  public duration!: number;

  @JsonProperty('bitrate')
  public bitrate!: number;

  @JsonProperty('templated')
  public templated!: boolean;

  @OnDeserialized()
  // tslint:disable-next-line:no-unused-variable
  // @ts-ignore: TS6133 (is declared but its value is never read.)
  private _OnDeserialized() {
    /* istanbul ignore next */
    if (!this.href) {
      console.log('Required [Link.Href] is not set!');
    }
  }
}
