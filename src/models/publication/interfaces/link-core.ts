import { Properties } from '../properties';

/**
 * https://readium.org/webpub-manifest/relationships.html
 */
export type Relation = 'alternate' | 'contents' | 'cover' | 'manifest' | 'search' | 'self';

/**
 * https://readium.org/webpub-manifest/#the-link-object
 */
export interface LinkCore {
  children: LinkCore[];
  href: string;
  type: string;
  title: string;
  rel: Set<Relation>;
  height: number;
  width: number;
  properties: Properties;
  duration: number;
  bitrate: number;
  templated: boolean;
}
