# Random id generator

## Comparing to others
### 🗿 77342993 **`snowflake`** - unique by design, exposed to scrapping
### 🗿 iF46TNQVP1a **`base58 64bit`** - unlikely to collide, but still exposed
### 🤡 8g3GgFVUYrQrfepEQrD63v **`base58 128bit`** - shortest, no chance of collision
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