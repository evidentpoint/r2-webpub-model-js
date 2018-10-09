import { JsonObject, JsonProperty } from 'ta-json-x';

@JsonObject()
export class MediaOverlay {
  @JsonProperty('active-class')
  public ActiveClass!: string;

  @JsonProperty('playback-active-class')
  public PlaybackActiveClass!: string;
}
