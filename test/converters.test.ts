import { JsonDateConverter } from '../src/models/converters/date-converter';
import { JsonNumberConverter } from '../src/models/converters/number-converter';
import { JsonStringConverter } from '../src/models/converters/string-converter';
import { JsonThingConverter } from '../src/models/publication/converters/thing-json-converter';
import { Thing } from '../src/models/publication/thing';

describe('Converters', () => {
  test('date', () => {
    const converter = new JsonDateConverter();

    const date = new Date('1851-10-18');

    expect(converter.serialize(date)).toEqual('1851-10-18T00:00:00.000Z');
    expect(converter.serialize(undefined)).toBeNull();

    expect(converter.deserialize('1851-10-18')).toEqual(date);
    expect(converter.deserialize('1851-10-18T00:00:00.000Z')).toEqual(date);
    expect(converter.deserialize('foobar')).toEqual(undefined);
  });

  test('number', () => {
    const converter = new JsonNumberConverter();

    expect(converter.serialize('1')).toEqual(1);
    expect(converter.serialize(2)).toEqual(2);

    expect(converter.deserialize('1')).toEqual(1);
    expect(converter.deserialize(2)).toEqual(2);
  });

  test('string or single item array of string', () => {
    const converter = new JsonStringConverter();

    expect(converter.serialize('foobar')).toEqual('foobar');

    expect(converter.deserialize('foobar')).toEqual('foobar');
    expect(converter.deserialize(['foobar'])).toEqual(['foobar']);
  });

  test('thing', () => {
    const converter = new JsonThingConverter(Thing);

    const thingModel = new Thing();
    thingModel.name = 'foo';
    thingModel.identifier = 'bar';
    thingModel.sortAs = 'foobar';

    const thingObject = { identifier: 'bar', name: 'foo', sortAs: 'foobar' };

    expect(converter.serialize(thingModel)).toEqual(thingObject);

    expect(converter.deserialize(thingObject)).toEqual(thingModel);

    const thingModelSimple = new Thing();
    thingModelSimple.name = 'foo';

    expect(converter.deserialize('foo')).toEqual(thingModelSimple);
  });
});
