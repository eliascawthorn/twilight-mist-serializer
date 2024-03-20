const { Serializer } = require('jsonapi-serializer');

/**
 * Serialize JavaScript objects using jsonapi-serializer.
 * @param {object|array} data - The data to serialize. Can be a single object or an array of objects.
 * @param {object} options - Serialization options.
 * @returns {string} - The serialized JSON API.
 * @throws {Error} - If data is not provided or if options are missing required fields.
 */
function serialize(data, options) {
  if (!data) {
    throw new Error('Data to serialize is required.');
  }

  if (!options || !options.type) {
    throw new Error('Serialization options must include a type.');
  }

  const isArray = Array.isArray(data);
  const serializer = new Serializer(options.type, options);

  if (isArray) {
    return serializer.serialize(data);
  } else {
    return serializer.serialize({ [options.type]: data });
  }
}

module.exports = serialize;
