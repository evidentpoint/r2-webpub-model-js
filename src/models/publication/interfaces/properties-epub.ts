export type ContainsMediaType = 'mathml' | 'onix' | 'remote-resources' | 'js' | 'svg' | 'xmp';
export type LayoutProperty = 'fixed' | 'reflowable';
export type OverflowProperty = 'auto' | 'paginated' | 'scrolled' | 'scrolled-continuous';
export type SpreadProperty = 'auto' | 'both' | 'none' | 'landscape';

/**
 * https://readium.org/webpub-manifest/extensions/epub.html#properties
 * https://readium.org/webpub-manifest/properties.html#extensions
 */
export interface PropertiesEPUB {
  contains: ContainsMediaType[];
  encrypted: object; //TODO: Create true Encrypted object
  layout: LayoutProperty;
  mediaOverlay: string; //URI
  overflow: OverflowProperty;
  spread: SpreadProperty;
}
