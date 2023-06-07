# Base58 ID Generator: Generate Unique IDs in Node.js

The Base58 Random ID Generator is a powerful Node.js package that enables developers to effortlessly generate unique and secure identifiers in the Base58 format. By leveraging the simplicity and efficiency of Base58 encoding, this package provides a reliable method for generating random IDs that are ideal for various use cases, including database keys, short URLs, cryptographic nonces, and more.

With this package, you can quickly generate IDs that are resistant to human error and ensure compatibility across different systems. Base58 encoding eliminates ambiguous characters, such as 0 (zero), O (uppercase o), I (uppercase i), and l (lowercase L), which can cause confusion in certain contexts. This ensures that the generated IDs are easier to read, write, and communicate accurately.

The Base58 Random ID Generator offers flexibility and customizability, allowing you to specify the desired length of the generated IDs. Additionally, it provides a cryptographically secure source of randomness, ensuring that the generated IDs are highly unpredictable and resistant to brute-force attacks.

## Key Features:
Generate unique identifiers in Base58 format
Suitable for diverse use cases
Ensures compatibility and readability
Customizable ID length
Utilizes secure source of randomness
Simple integration into Node.js applications
Simplify ID generation in your Node.js applications with the Base58 ID Generator. Create unique and secure IDs effortlessly while ensuring compatibility and readability.

## Comparing to others
### 🗿 77342993 **`snowflake`** - unique by design, exposed to scrapping
### 🗿 iF46TNQVP1a **`base58 64bit`** - unlikely to collide, but still exposed
### 🗿 8g3GgFVUYrQrfepEQrD63v **`base58 128bit`** - shortest, no chance of collision
### 🤡 45HHx2+f8Y8pisEqszsogA== **`base64 128bit`** - ugly in urls
### 🤡 72868a6f0c1b13ebe96fdd39f64c95c4 **`hex 128bit`** - lots of unused characters
### 🤡 6310304c-450b-4670-bbb0-eb8e80e7fd46 **`uuid 128bit`** - fastest to generate, but consumes lots of space

## Installation
``` sh
npm install --save @v57/id
```

## Generating id
``` js
let { newId } = require('@v57/id')
const id = newId(16) // returns 256 bit random id in base58 format
```

## Generating unique id

### Using sets
``` js
let { uniqueId } = require('@v57/id')
let ids = new Set()
// will check if id already exists in set
const id = uniqueId(4, id => ids.has(id))
```

### Using MongoDB
``` js
let { uniqueId } = require('@v57/id')
// will check if id already exists in collection
const id = uniqueId(4, async id => await mongo.collection('some').findOne({ id }))
```

## Performance

### Generating 1 million ids
- `uuid(128bit)` **0.051s (fastest)**
- `hex(128bit)` **1.621s**
- `base64(128bit)` **1.584s**
- `base58(128bit)` **1.795s**
- `base58(64bit)` **1.851s**
- `snowflake` **0.976s**

## Use cases

```
newId(4) // very short id, you can only have 4 billion of them so use it for small lists (less than 100k items is enough to not worry about checking for already used)
newId(8) // short id, consider it as public id
newId(16) // use it for main id cannot be randomly accessed
newId(32) // you can use it to generate secrets, keys and password
```
