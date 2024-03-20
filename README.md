# twilight-mist-serializer

`twilight-mist-serializer` is a JavaScript library for serializing JavaScript objects into JSON API format using the
jsonapi-serializer package. It supports both single objects and arrays of objects.

## Installation

You can install `twilight-mist-serializer` via npm:

```bash
npm install twilight-mist-serializer
```

## Usage

To use `twilight-mist-serializer`, require it in your project and pass the data and serialization options to
the `serialize` function.

```javascript
const serialize = require('twilight-mist-serializer');

// Example data
const singleData = {
  id: 1,
  type: 'post',
  attributes: {
    title: 'Hello, world!',
    content: 'This is a test post.'
  }
};

const arrayData = [
  {
    id: 1,
    type: 'post',
    attributes: {
      title: 'Post 1',
      content: 'This is post 1.'
    }
  },
  {
    id: 2,
    type: 'post',
    attributes: {
      title: 'Post 2',
      content: 'This is post 2.'
    }
  }
];

// Serialization options
const options = {
  type: 'posts', // Resource type
  attributes: ['title', 'content'] // Attributes to include in the serialized output
};

// Serialize single data
const serializedSingleData = serialize(singleData, options);

console.log(serializedSingleData);

// Serialize array data
const serializedArrayData = serialize(arrayData, options);

console.log(serializedArrayData);
```

## API

### `serialize(data, options)`

Serializes JavaScript objects into JSON API format using the jsonapi-serializer package.

- `data` (object|array): The data to serialize. Can be a single object or an array of objects.
- `options` (object): Serialization options. Must include a `type` field representing the resource type.

Returns a string representing the serialized JSON API.

Throws an error if data is not provided or if options are missing required fields.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
