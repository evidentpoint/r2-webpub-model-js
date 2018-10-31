import {
  JsonConverter,
  JsonElementType,
  JsonObject,
  JsonProperty,
  OnDeserialized,
} from 'ta-json-x';

import { JsonStringConverter } from './converters/string-converter';

import { Properties } from './properties';

@JsonObject()
export class Link {
  @JsonProperty('rel')
  @JsonConverter(JsonStringConverter)
  @JsonElementType(String)
  public rel!: Set<string>;

  @JsonProperty('href')
  public href!: string;

  @JsonProperty('type')
  public type!: string;

  @JsonProperty('height')
  public height!: number;

  @JsonProperty('width')
  public width!: number;

  @JsonProperty('title')
  public title!: string;

  @JsonProperty('properties')
  public properties!: Properties;

  @JsonProperty('duration')
  public duration!: number;

  @JsonProperty('bitrate')
  public bitrate!: number;

  @JsonProperty('templated')
  public templated!: boolean;

  // It may make sense to do without these helpers if Rel is a Set
  // public AddRels(rels: string[]) {
  //   rels.forEach((rel) => {
  //     this.AddRel(rel);
  //   });
  // }
  //
  // public AddRel(rel: string) {
  //   if (this.HasRel(rel)) {
  //     return;
  //   }
  //   if (!this.Rel) {
  //     this.Rel = [rel];
  //   } else {
  //     this.Rel.push(rel);
  //   }
  // }
  //
  // public HasRel(rel: string): boolean {
  //   return this.Rel && this.Rel.indexOf(rel) >= 0;
  // }

  @OnDeserialized()
  // tslint:disable-next-line:no-unused-variable
  // @ts-ignore: TS6133 (is declared but its value is never read.)
  private _OnDeserialized() {
    /* istanbul ignore next */
    if (!this.type) {
      console.log('Required [Link.Type] is not set!');
    }
  }
}
