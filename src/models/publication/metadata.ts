import {
  JsonConverter,
  JsonElementType,
  JsonObject,
  JsonProperty,
  OnDeserialized,
} from 'ta-json-x';

import { JsonStringConverter } from '../../converters/string-converter';

import { MetadataCore, ReadingProgression } from './interfaces/metadata-core';
import { MultiLangString } from './interfaces/multi-lang-string';

import { BelongsTo } from './belongs-to';
import { Contributor } from './contributor';
import { Subject } from './subject';
import { Properties } from './properties';
import { MediaOverlay } from './media-overlay';

@JsonObject()
export class Metadata implements MetadataCore {
  // Core

  @JsonProperty('@type')
  public type!: string;

  @JsonProperty('identifier')
  public identifier!: string;

  @JsonProperty('title')
  // @JsonType(String)
  // not needed because primitive string union with
  // simple object type (string keys, string values)
  public title!: string | MultiLangString; // | string[] | MultiLangString[]

  @JsonProperty('subtitle')
  public subtitle!: string | MultiLangString;

  @JsonProperty('modified')
  public modified!: Date;

  @JsonProperty('published')
  public published!: Date;

  @JsonConverter(JsonStringConverter)
  @JsonProperty('language')
  @JsonElementType(String)
  public language!: string[];

  @JsonProperty('sortAs')
  public sortAs!: string;

  @JsonProperty('author')
  @JsonElementType(Contributor)
  public author!: Contributor[];

  @JsonProperty('translator')
  @JsonElementType(Contributor)
  public translator!: Contributor[];

  @JsonProperty('editor')
  @JsonElementType(Contributor)
  public editor!: Contributor[];

  @JsonProperty('artist')
  @JsonElementType(Contributor)
  public artist!: Contributor[];

  @JsonProperty('illustrator')
  @JsonElementType(Contributor)
  public illustrator!: Contributor[];

  @JsonProperty('letterer')
  @JsonElementType(Contributor)
  public letterer!: Contributor[];

  @JsonProperty('penciler')
  @JsonElementType(Contributor)
  public penciler!: Contributor[];

  @JsonProperty('colorist')
  @JsonElementType(Contributor)
  public colorist!: Contributor[];

  @JsonProperty('inker')
  @JsonElementType(Contributor)
  public inker!: Contributor[];

  @JsonProperty('narrator')
  @JsonElementType(Contributor)
  public narrator!: Contributor[];

  @JsonProperty('contributor')
  @JsonElementType(Contributor)
  public contributor!: Contributor[];

  @JsonProperty('publisher')
  @JsonElementType(Contributor)
  public publisher!: Contributor[];

  @JsonProperty('imprint')
  @JsonElementType(Contributor)
  public imprint!: Contributor[];

  @JsonProperty('readingProgression')
  public readingProgression!: ReadingProgression;

  @JsonProperty('description')
  public description!: string;

  @JsonProperty('duration')
  public duration!: number;

  @JsonProperty('numberOfPages')
  public numberOfPages!: number;

  @JsonProperty('belongsTo')
  public belongsTo!: BelongsTo;

  @JsonProperty('subject')
  @JsonElementType(Subject)
  public subject!: Subject[];

  // EPUB extension

  @JsonProperty('rendition')
  public rendition!: Properties;

  @JsonProperty('source')
  public source!: string;

  @JsonConverter(JsonStringConverter)
  @JsonProperty('epub-type')
  @JsonElementType(String)
  public epubType!: string[];

  @JsonProperty('rights')
  public rights!: string;

  @JsonProperty('media-overlay')
  public mediaOverlay!: MediaOverlay;

  @OnDeserialized()
  // tslint:disable-next-line:no-unused-variable
  // @ts-ignore: TS6133 (is declared but its value is never read.)
  private _OnDeserialized() {
    /* istanbul ignore next */
    if (!this.title) {
      console.log('Required [Metadata.Title] is not set!');
    }
  }
}
