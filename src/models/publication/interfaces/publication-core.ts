import { Metadata } from '../metadata';
import { Link } from '../link';

/**
 * https://readium.org/webpub-manifest/
 */
export interface PublicationCore {
  //@context
  context: string[];

  metadata: Metadata;
  links: Link[];
  readingOrder: Link[];
  resources: Link[];
}
