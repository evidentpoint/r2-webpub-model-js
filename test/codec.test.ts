import { Publication } from '../src/r2-webpub-model-js';

const FIXTURES_PATH = './fixtures';
const FIXTURES = ['simple', 'complex'];

const importedFixtures: { [key: string]: {} } = {};

beforeAll(async () => {
  FIXTURES.forEach(async (fixture) => {
    // @ts-ignore
    const fixtureModule = await import(`${FIXTURES_PATH}/${fixture}/manifest`);
    importedFixtures[fixture] = fixtureModule.default;
  });
});

describe('Publication', () => {

  test('instantiate', () => {
    expect(new Publication()).toBeInstanceOf(Publication);
  });

  describe.each(FIXTURES)('%s', (fixture) => {
    test('deserialize and serialize', () => {
        const jsonObject = importedFixtures[fixture];
        const model = Publication.deserialize(jsonObject);
        debugger;
        expect(model.serialize()).toEqual(jsonObject);
    });

    test('parse and stringify', () => {
        const jsonString = JSON.stringify(importedFixtures[fixture]);
        const model = Publication.parse(jsonString);
        expect(model.stringify()).toEqual(jsonString);
    });
  });
});
