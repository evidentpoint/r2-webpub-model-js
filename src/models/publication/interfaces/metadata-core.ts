import { Contributor } from '../contributor';
import { BelongsTo } from '../belongs-to';
import { Subject } from '../subject';
import { MultiLangString } from './multi-lang-string';

export type ReadingProgression = 'auto' | 'ltr' | 'rtl';

/**
 * https://readium.org/webpub-manifest/#metadata
 */
export interface MetadataCore {
  //@type
  type: string;
  identifier: string;

  title: string | MultiLangString;
  subtitle: string | MultiLangString;
  modified: Date;
  published: Date;
  language: string[];
  sortAs: string;

  author: Contributor[];
  translator: Contributor[];
  editor: Contributor[];
  artist: Contributor[];
  illustrator: Contributor[];
  letterer: Contributor[];
  penciler: Contributor[];
  colorist: Contributor[];
  inker: Contributor[];
  narrator: Contributor[];
  contributor: Contributor[];
  publisher: Contributor[];
  imprint: Contributor[];

  readingProgression: ReadingProgression;
  description: string;
  duration: number;
  numberOfPages: number;

  belongsTo: BelongsTo;
  subject: Subject[];
}
