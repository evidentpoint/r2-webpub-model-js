import { JsonObject, JsonProperty, OnDeserialized } from 'ta-json-x';

import { IStringMap } from './metadata-multilang';

@JsonObject()
export class Thing {
  @JsonProperty('name')
  public Name!: string | IStringMap;

  @JsonProperty('identifier')
  public Identifier!: string;

  @JsonProperty('sortAs')
  public SortAs!: string;

  @OnDeserialized()
  // tslint:disable-next-line:no-unused-variable
  // tslint:disable-next-line
  // @ts-ignore: TS6133 (is declared but its value is never read.)
  private _OnDeserialized() {
    // tslint:disable-line
    if (!this.Name) {
      console.log('Required [Thing.Name] is not set!');
    }
  }
}
