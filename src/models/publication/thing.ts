import { JsonObject, JsonProperty, OnDeserialized } from 'ta-json-x';

import { MultiLangString } from './interfaces/multi-lang-string';

@JsonObject()
export class Thing {
  @JsonProperty('name')
  public name!: string | MultiLangString;

  @JsonProperty('identifier')
  public identifier!: string;

  @JsonProperty('sortAs')
  public sortAs!: string;

  @OnDeserialized()
  // tslint:disable-next-line:no-unused-variable
  // tslint:disable-next-line
  // @ts-ignore: TS6133 (is declared but its value is never read.)
  private _OnDeserialized() {
    // tslint:disable-line
    /* istanbul ignore next */
    if (!this.name) {
      console.log('Required [Thing.Name] is not set!');
    }
  }
}
