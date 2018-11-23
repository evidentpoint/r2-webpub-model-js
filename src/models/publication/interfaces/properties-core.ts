export type OrientationProperty = 'auto' | 'landscape' | 'portrait'; // | string;
export type PageProperty = 'left' | 'right' | 'center'; // | string;

/**
 * https://readium.org/webpub-manifest/properties.html
 */
export interface PropertiesCore {
  orientation: OrientationProperty;
  page: PageProperty;
}
