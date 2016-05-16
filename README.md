# Typed Fuse

The type definition for [`fuse.js`](https://github.com/krisk/Fuse)

***Due to it not being a proper ES compatible module you have to import using:***
```typescript
import Fuse = require('fuse.js')
```

### Usage
```typescript
import Fuse = require('fuse.js')

interface SearchItem {
  data: any 
  label: string
}

var fuseSearch = new Fuse<SearchItem>(searchList, searchOptions) // see krisk/Fuse for available options

```

## LICENSE

MIT

## Contributing

```sh
# Fork this repo
npm install

npm run watch

# add tests, make changes, pass tests ... then [ctrl+c]
npm run publish
```

## Updating

Update `typings.json/version` to match the source version you are typing against.
e.g. if you are creating typings for `chai@3.5.0`, then:
```js
// typings.json
{
  "version": "3.5.0"
  // ...
}
```
