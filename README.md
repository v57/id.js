# Random id generator

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