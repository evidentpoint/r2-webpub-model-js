import { JsonConverter, JsonElementType, JsonObject, JsonProperty, OnDeserialized } from 'ta-json-x';

import { JsonStringConverter } from './converters/string-converter';

import { BelongsTo } from './metadata/belongsto';
import { Contributor } from './metadata/contributor';
import { IStringMap } from './metadata/multilang';
import { Subject } from './metadata/subject';
import { ReadingProgression } from './metadata/readingprogression';

@JsonObject()
export class Metadata {
  @JsonProperty('@type')
  public Type!: string;

  @JsonProperty('identifier')
  public Identifier!: string;

  @JsonProperty('title')
  // @JsonType(String)
  // not needed because primitive string union with
  // simple object type (string keys, string values)
  public Title!: string | IStringMap; // | string[] | IStringMap[]

  @JsonProperty('subtitle')
  public Subtitle!: string | IStringMap;

  @JsonProperty('modified')
  public Modified!: Date;

  @JsonProperty('published')
  public PublicationDate!: Date;

  @JsonConverter(JsonStringConverter)
  @JsonProperty('language')
  @JsonElementType(String)
  public Language!: string[];

  @JsonProperty('sortAs')
  public SortAs!: string;

  @JsonProperty('author')
  @JsonElementType(Contributor)
  public Author!: Contributor[];

  @JsonProperty('translator')
  @JsonElementType(Contributor)
  public Translator!: Contributor[];

  @JsonProperty('editor')
  @JsonElementType(Contributor)
  public Editor!: Contributor[];

  @JsonProperty('artist')
  @JsonElementType(Contributor)
  public Artist!: Contributor[];

  @JsonProperty('illustrator')
  @JsonElementType(Contributor)
  public Illustrator!: Contributor[];

  @JsonProperty('letterer')
  @JsonElementType(Contributor)
  public Letterer!: Contributor[];

  @JsonProperty('penciler')
  @JsonElementType(Contributor)
  public Penciler!: Contributor[];

  @JsonProperty('colorist')
  @JsonElementType(Contributor)
  public Colorist!: Contributor[];

  @JsonProperty('inker')
  @JsonElementType(Contributor)
  public Inker!: Contributor[];

  @JsonProperty('narrator')
  @JsonElementType(Contributor)
  public Narrator!: Contributor[];

  @JsonProperty('contributor')
  @JsonElementType(Contributor)
  public Contributor!: Contributor[];

  @JsonProperty('publisher')
  @JsonElementType(Contributor)
  public Publisher!: Contributor[];

  @JsonProperty('imprint')
  @JsonElementType(Contributor)
  public Imprint!: Contributor[];

  @JsonProperty('readingProgression')
  public ReadingProgression!: ReadingProgression;

  @JsonProperty('description')
  public Description!: string;

  @JsonProperty('duration')
  public Duration!: number;

  @JsonProperty('numberOfPages')
  public NumberOfPages!: number;

  @JsonProperty('belongsTo')
  public BelongsTo!: BelongsTo;

  @JsonProperty('subject')
  @JsonElementType(Subject)
  public Subject!: Subject[];

  @OnDeserialized()
  // tslint:disable-next-line:no-unused-variable
  // @ts-ignore: TS6133 (is declared but its value is never read.)
  private _OnDeserialized() {
    if (!this.Title) {
      console.log('Required [Metadata.Title] is not set!');
    }
  }
}
