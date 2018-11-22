import { Link } from '../link';

/**
 * https://readium.org/webpub-manifest/extensions/epub.html
 */
export interface PublicationEPUB {
  toc: Link[];
  pageList: Link[];
  landmarks: Link[];
  loi: Link[];
  loa: Link[];
  lov: Link[];
  lot: Link[];
}
