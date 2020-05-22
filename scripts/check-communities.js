const AJV = require('ajv');
const { $schema: _, ...communities } = require('../src/assets/json/communities.json');
const schema = require('../src/assets/json/schema.json');

const ajv = new AJV({ allErrors: true });

ajv.addKeyword('unique-community-id', {
  compile: () => {
    const ids = new Set();

    return id => {
      if (ids.has(id)) {
        return false;
      }

      ids.add(id);

      return true;
    };
  },
});

if (!ajv.validate(schema, communities)) {
  throw ajv.errors;
}
