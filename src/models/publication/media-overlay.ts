import { JsonObject, JsonProperty } from 'ta-json-x';

@JsonObject()
export class MediaOverlay {
  @JsonProperty('active-class')
  public activeClass!: string;

  @JsonProperty('playback-active-class')
  public playbackActiveClass!: string;
}
