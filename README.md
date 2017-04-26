# convert-range
> Converts number from one range to another

## Installation
`$ npm install convert-range`

## Usage
Examples:  
```js
const convertRange = require('convert-range');

convertRange(3000, [0, 5000], [2500, 10000]); // 7000
convertRange(0.6665, {min: 0, max: 1}, {min: 1000, max: 5000}); // 3666

convertRange(3, [1, 10], [0, window.innerWidth]);
```

## License
MIT
