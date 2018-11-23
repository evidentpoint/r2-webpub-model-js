export default {
  '@context': ['https://readium.org/webpub-manifest/context.jsonld', 'http://schema.org'],
  metadata: {
    '@type': 'Book',
    identifier: 'urn:isbn:978031600000X',
    title: 'Moby-Dick',
    subtitle: {
      en: 'or, The Whale',
      fr: 'ou, le Cachalot',
    },
    modified: '2015-09-29T17:00:00.000Z',
    published: '1851-10-18T00:00:00.000Z',
    language: ['en', 'fr'],
    sortAs: 'Moby-Dick',
    author: {
      name: {
        en: 'Herman Melville',
        fr: 'Herman Melville',
      },
      identifier: 'https://orcid.org/0000-0002-1825-0097',
      sortAs: 'Melville, H.',
    },
    editor: {
      name: 'Richard Bentley',
    },
    illustrator: {
      name: 'Rockwell Kent',
    },
    readingProgression: 'ltr',
    description: 'Call me Ishmael',
    numberOfPages: 999,
    belongsTo: {
      series: {
        position: 2,
        name: 'bar',
      },
      collection: {
        position: 1,
        name: 'foo',
      },
    },
    subject: [
      {
        scheme: 'foo',
        code: 'bar',
      },
    ],
  },
  links: [
    {
      href: 'https://example.com/manifest.json',
      type: 'application/webpub+json',
      rel: 'self',
    },
    {
      href: 'https://example.com/publication.epub',
      type: 'application/epub+zip',
      rel: 'alternate',
    },
    {
      href: 'https://example.com/search{?query}',
      type: 'text/html',
      rel: 'search',
      templated: true,
    },
  ],
  readingOrder: [
    {
      href: 'https://example.com/c001.html',
      type: 'text/html',
      title: 'Chapter 1',
    },
    {
      href: 'https://example.com/c002.html',
      type: 'text/html',
      title: 'Chapter 2',
    },
  ],
  resources: [
    {
      href: 'https://example.com/cover.jpg',
      type: 'image/jpeg',
      rel: 'cover',
      height: 600,
      width: 400,
    },
    {
      href: 'https://example.com/contents.html',
      type: 'text/html',
      rel: 'contents',
    },
    {
      href: 'https://example.com/foobar.txt',
      type: 'text/plain',
      rel: ['foo', 'bar'],
    },
    {
      href: 'https://example.com/style.css',
      type: 'text/css',
    },
    {
      href: 'https://example.com/whale.jpg',
      type: 'image/jpeg',
    },
    {
      href: 'https://example.com/boat.svg',
      type: 'image/svg+xml',
    },
    {
      href: 'https://example.com/notes.html',
      type: 'text/html',
    },
  ],
};
