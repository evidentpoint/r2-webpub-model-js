import { Publication } from '../src/r2-webpub-model-js';

/**
 * Publication test
 */
describe('Publication test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('Publication is instantiable', () => {
    expect(new Publication()).toBeInstanceOf(Publication);
    const testPub = `
      {
        "@context": "https://readium.org/webpub-manifest/context.jsonld",
        
        "metadata": {
          "@type": "http://schema.org/Book",
          "title": "Moby-Dick",
          "author": "Herman Melville",
          "identifier": "urn:isbn:978031600000X",
          "language": "en",
          "modified": "2015-09-29T17:00:00Z"
        },
      
        "links": [
          {"rel": "self", "href": "https://example.com/manifest.json", "type": "application/webpub+json"},
          {"rel": "alternate", "href": "https://example.com/publication.epub", "type": "application/epub+zip"},
          {"rel": "search", "href": "https://example.com/search{?query}", "type": "text/html", "templated": true}
        ],
        
        "readingOrder": [
          {"href": "https://example.com/c001.html", "type": "text/html", "title": "Chapter 1"}, 
          {"href": "https://example.com/c002.html", "type": "text/html", "title": "Chapter 2"}
        ],
      
        "resources": [
          {"rel": "cover", "href": "https://example.com/cover.jpg", "type": "image/jpeg", "height": 600, "width": 400},
          {"href": "https://example.com/style.css", "type": "text/css"}, 
          {"href": "https://example.com/whale.jpg", "type": "image/jpeg"}, 
          {"href": "https://example.com/boat.svg", "type": "image/svg+xml"}, 
          {"href": "https://example.com/notes.html", "type": "text/html"}
        ]
      }`;
    const test = Publication.parse(testPub);
    const normalizedTest = JSON.stringify(JSON.parse(testPub));
    console.log(test.stringify() === normalizedTest);
  });
});
