import { Collection } from '../metadata-collection';
import { JsonCollectionConverter } from './metadata-collection-json-converter';
import { Contributor } from '../metadata-contributor';
import { JsonContributorConverter } from './metadata-contributor-json-converter';
import { JsonDateConverter } from './ta-json-date-converter';
import { JsonNumberConverter } from './ta-json-number-converter';

import { propertyConverters } from 'ta-json-x';

propertyConverters.set(Contributor, new JsonContributorConverter());
propertyConverters.set(Collection, new JsonCollectionConverter());

propertyConverters.set(Date, new JsonDateConverter());
propertyConverters.set(Number, new JsonNumberConverter());
