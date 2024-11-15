# NodeJS

- NodeJS have no DOM or BOM.
- It have no window object.
- We can do os intractions in NodeJS.
- NodeJS can intract with the file system.
- Network interactions can be done in NodeJS.

## Moduling NodeJS

- Module is a collection of reusable code
- Two types of moduling
  - CommonJS (require and exports)
  - ES6 (import/export)

### CommonJS

```js
// name.js
module.exports = {
  name: "John",
  age: 30,
};
```

```js
const { name, age } = require("./name");
```
## NodeJS inbuilt modules
- Http
- Fs
- Path
- Os

99