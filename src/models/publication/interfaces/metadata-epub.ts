import { Properties } from '../properties';
import { MediaOverlay } from '../media-overlay';

/**
 * https://readium.org/webpub-manifest/extensions/epub.html#metadata
 */
export interface MetadataEPUB {
  rendition: Properties;
  source: string;
  epubType: string[];
  rights: string;
  mediaOverlay: MediaOverlay;
}
